import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="/brand/badge.png"
            alt="The Ponderosa"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full ring-1 ring-[#c9a84c]/35"
            priority
          />
          <span className="text-sm font-semibold tracking-wide">the-ponderosa</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-white/80">
          <Link className="hover:text-white" href="/about">
            About
          </Link>
          <a className="hover:text-white" href="mailto:hello@the-ponderosa.ai">
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          What we do
        </h1>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#c9a84c]/15 bg-white/[0.03] p-6">
            <h2 className="text-sm font-semibold">Build.</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              We build AI-enabled products and internal tooling focused on real user behavior: what
              people click, complete, and come back for.
            </p>
          </div>
          <div className="rounded-2xl border border-[#c9a84c]/15 bg-white/[0.03] p-6">
            <h2 className="text-sm font-semibold">Measure.</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              We set clear success metrics, instrument the product, and validate improvements with
              experiments.
            </p>
          </div>
          <div className="rounded-2xl border border-[#c9a84c]/15 bg-white/[0.03] p-6">
            <h2 className="text-sm font-semibold">Ship</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              We iterate quickly and obsess over polish where it matters: onboarding, paywalls,
              conversion flows, and coaching UX.
            </p>
          </div>
          <div className="rounded-2xl border border-[#c9a84c]/15 bg-white/[0.03] p-6">
            <h2 className="text-sm font-semibold">Contact</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              For SXSW AI Rodeo and other inquiries:
              <br />
              <a className="text-white underline underline-offset-4" href="mailto:hello@the-ponderosa.ai">
                hello@the-ponderosa.ai
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link className="text-sm text-white/70 hover:text-white" href="/">
            ← Back
          </Link>
        </div>
      </main>

      <footer className="border-t border-[#c9a84c]/15 py-8">
        <div className="mx-auto flex max-w-5xl px-6 text-xs text-white/70">
          © {new Date().getFullYear()} The Ponderosa
        </div>
      </footer>
    </div>
  );
}
