import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="text-sm font-semibold tracking-wide">the-ponderosa</div>
        <nav className="flex items-center gap-4 text-sm text-white/80">
          <Link className="hover:text-white" href="/about">
            About
          </Link>
          <a className="hover:text-white" href="mailto:hello@the-ponderosa.ai">
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-16">
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          The Ponderosa
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-white/80">
          A small team building practical AI tools and workflows. We ship fast, measure results,
          and iterate.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#0b1220]"
            href="mailto:hello@the-ponderosa.ai"
          >
            Get in touch
          </a>
          <Link
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white/90 hover:border-white/40"
            href="/about"
          >
            Read more
          </Link>
        </div>

        <section className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-semibold">Lean</div>
            <p className="mt-2 text-sm text-white/70">
              Minimal process. High output. Clear ownership.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-semibold">Evidence-driven</div>
            <p className="mt-2 text-sm text-white/70">
              We instrument, test, and iterate. Receipts over vibes.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-semibold">Human-facing</div>
            <p className="mt-2 text-sm text-white/70">
              UX and polish matter. AI that earns trust.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} The Ponderosa</div>
          <div>
            <a className="hover:text-white" href="mailto:hello@the-ponderosa.ai">
              hello@the-ponderosa.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
