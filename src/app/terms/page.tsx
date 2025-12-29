import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
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

          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="mb-4">By using the OnlyHate Chrome Extension, you agree to these terms.</p>
          <p className="mb-4">This extension is provided "as is" without any warranties. Use it at your own risk.</p>
          <p className="text-sm text-neutral-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
