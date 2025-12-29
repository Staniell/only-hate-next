import { ShieldAlert, Zap, Filter } from "lucide-react";

export function FeatureSection() {
  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-red-900/10 border border-red-900/30 flex items-center justify-center text-red-500 mb-6">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Negative-First Design</h3>
            <p className="text-neutral-400 leading-relaxed">
              We reverse the standard filter. Instead of hiding toxicity, we hide everything else. Perfect for finding
              bugs, valid criticism, or just pure hate.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-red-900/10 border border-red-900/30 flex items-center justify-center text-red-500 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Instant Feedback Loop</h3>
            <p className="text-neutral-400 leading-relaxed">
              Content creators use it to improve. Users use it to validate their anger. It's the fastest way to get to
              the point.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-red-900/10 border border-red-900/30 flex items-center justify-center text-red-500 mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Privacy Focused</h3>
            <p className="text-neutral-400 leading-relaxed">
              All analysis happens locally in your browser. We don't collect your data or the comments you view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
