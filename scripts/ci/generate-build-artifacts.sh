#!/usr/bin/env bash
# generate-build-artifacts.sh — the-ponderosa-site CI artifact pipeline
#
# Buildbot contract:
#   bash scripts/ci/generate-build-artifacts.sh <artifact_dir>
#
# Produces:
#   <artifact_dir>/desktop-home.png
#   <artifact_dir>/mobile-home.png
#   <artifact_dir>/desktop-about.png
#   <artifact_dir>/mobile-about.png
#   <artifact_dir>/dev-server.log
#
# Notes:
# - Starts Next.js dev server locally on a fixed port
# - Runs a Playwright capture pass
# - Ensures artifacts are world-readable for file server publishing

set -euo pipefail
umask 022

ARTIFACT_DIR="${1:?Usage: $0 <artifact_dir>}"
PORT="15001"
DEV_SERVER_PID=""

mkdir -p "$ARTIFACT_DIR"
chmod 755 "$ARTIFACT_DIR" || true

cleanup() {
  local exit_code=$?

  if [[ -n "${DEV_SERVER_PID:-}" ]]; then
    echo "[ci] Stopping dev server (PID $DEV_SERVER_PID)"
    pkill -P "$DEV_SERVER_PID" 2>/dev/null || true
    kill "$DEV_SERVER_PID" 2>/dev/null || true
    wait "$DEV_SERVER_PID" 2>/dev/null || true
  fi

  # Free the port regardless
  fuser -k "${PORT}/tcp" 2>/dev/null || true

  exit "$exit_code"
}
trap cleanup EXIT

# Defensive cleanup before start
fuser -k "${PORT}/tcp" 2>/dev/null || true

echo "[ci] Installing npm dependencies…"
npm ci --prefer-offline 2>&1 | tail -n 10

echo "[ci] Ensuring Playwright + Chromium are installed…"
# Keep inside contract: Buildbot shouldn't need separate browser install steps.
npm install --no-save playwright 2>&1 | tail -n 10
npx playwright install chromium 2>&1 | tail -n 10

echo "[ci] Starting Next.js dev server on port ${PORT}…"
PORT="$PORT" npm run dev &>"$ARTIFACT_DIR/dev-server.log" &
DEV_SERVER_PID=$!

echo "[ci] Waiting for server readiness…"
for i in $(seq 1 60); do
  if curl -sf -m 2 "http://localhost:${PORT}" >/dev/null 2>&1; then
    echo "[ci] Server ready after ${i}s"
    break
  fi
  if [[ "$i" -eq 60 ]]; then
    echo "[ci] ERROR: Server did not come up after 60s" >&2
    tail -n 120 "$ARTIFACT_DIR/dev-server.log" >&2 || true
    exit 1
  fi
  sleep 1
done

echo "[ci] Running Playwright screenshot capture…"
node scripts/ci/playwright-screenshots.js "$ARTIFACT_DIR" "http://localhost:${PORT}"

chmod -R o+rX "$ARTIFACT_DIR" 2>/dev/null || true

echo "[ci] Done → ${ARTIFACT_DIR}"
