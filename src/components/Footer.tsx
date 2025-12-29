import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-neutral-900">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-black text-xl text-white tracking-tighter">OnlyHate</span>
          </div>
          <span className="text-neutral-600 text-sm">© {new Date().getFullYear()} OnlyHate. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-neutral-500 hover:text-white transition-colors text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-neutral-500 hover:text-white transition-colors text-sm">
            Terms of Service
          </Link>
          <div className="h-4 w-px bg-neutral-800" />
          <Link
            href="https://staniell.vercel.app/#projects"
            target="_blank"
            className="text-red-500 hover:text-white transition-colors text-sm font-medium"
          >
            More Projects
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/gio-staniell-belolo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5 fill-current" />
          </a>
          <a
            href="https://github.com/staniell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>
    </footer>
  );
}
