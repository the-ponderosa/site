import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/badge.png"
            alt="The Ponderosa"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full ring-1 ring-[#c9a84c]/35"
            priority
          />
          <div className="text-sm font-semibold tracking-wide">the-ponderosa</div>
        </div>
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
          A small lab building AI infrastructure from scratch. We run tight experiments,
          and iterate.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#c9a84c] px-5 text-sm font-semibold text-[#1a0e2e] hover:bg-[#e8c34a]"
            href="mailto:hello@the-ponderosa.ai"
          >
            Get in touch
          </a>

        </div>


      </main>

      <footer className="border-t border-[#c9a84c]/15 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
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
