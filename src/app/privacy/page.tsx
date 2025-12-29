import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="grow text-neutral-300 py-32 px-4">
        <div className="container mx-auto max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-red-500 hover:text-white transition-colors mb-8 font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="mb-4">
            At OnlyHate, we prioritize your privacy. All sentiment analysis and comment filtering happens locally on
            your device.
          </p>
          <p className="mb-4">
            We do not collect, store, or transmit your personal data or the content of the comments you view.
          </p>
          <p className="text-sm text-neutral-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
