import { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/app/components/Hero";
import OnboardingForm from "@/app/components/OnboardingForm";

export const metadata: Metadata = {
  title: "Career Sathi Partner Onboarding — LearningShala",
  description:
    "LearningShala Partner Program - Career Sathi banne ke liye basic KYC form bhariye aur 24 ghante ke andar earning shuru karein.",
};

export default function BecomeCareerSathiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative py-12 md:py-20 bg-cream/50">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Partner Onboarding
            </span>
            <h1 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              Career Sathi — Basic KYC Form
            </h1>
            <p className="mt-3 max-w-xl mx-auto text-base text-muted-foreground">
              Neeche form bhariye. Hamari team 24 ghante ke andar aapse contact karegi aur onboarding complete karwayegi.
            </p>
          </div>

          {/* Form */}
          <OnboardingForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">LearningShala ke baare mein</Link>
            <a href="#" className="hover:text-foreground">Terms & Conditions</a>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Helpline</a>
          </nav>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} LearningShala</p>
        </div>
      </footer>
    </div>
  );
}
