import { Coffee } from "lucide-react";

export function SupportSection() {
  return (
    <section className="py-32 bg-black flex flex-col items-center justify-center text-center border-t border-neutral-900">
      <div className="container px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Fuel the <span className="text-red-600">Hate</span>
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto mb-10 text-lg">
          Development is fueled by caffeine and spite. Help us keep the updates coming.
        </p>

        <a
          href="https://ko-fi.com/onlyhate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF5E5B] hover:bg-[#ff4642] text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,94,91,0.5)]"
        >
          <Coffee className="w-6 h-6" />
          <span>Buy us a Coffee</span>
        </a>
      </div>
    </section>
  );
}
