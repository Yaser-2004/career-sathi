import { Metadata } from "next";
import Hero from "@/app/components/Hero";

export const metadata: Metadata = {
  title: "LearningShala — Online Degree se Top Private University",
  description:
    "IGNOU aur DU SOL se kahin behtar. 55+ UGC-approved universities compare karke apni free 1:1 guidance call book karein. EMI ₹2,500/month se shuru.",
  openGraph: {
    title: "LearningShala — Free 1:1 Guidance Call",
    description:
      "Top Private University se Online Degree. 55+ UGC-approved universities. EMI ₹2,500/month se shuru.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
    </main>
  );
}