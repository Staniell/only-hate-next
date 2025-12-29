export function PlatformSection() {
  return (
    <section className="py-24 bg-neutral-900/30 border-t border-neutral-900">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-16">Supported Platforms</h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {/* YouTube - Active */}
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-24 h-24 rounded-3xl bg-red-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24" aria-label="YouTube">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-xl">YouTube</span>
              <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full border border-green-500/20">
                Active
              </span>
            </div>
          </div>

          {/* Facebook - Coming Soon */}
          <div className="flex flex-col items-center gap-6 opacity-40 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0">
            <div className="w-24 h-24 rounded-3xl bg-[#1877F2] flex items-center justify-center border border-white/10">
              <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-neutral-400 font-medium text-xl">Facebook</span>
              <span className="px-3 py-1 bg-neutral-800 text-neutral-500 text-xs font-bold rounded-full border border-neutral-700">
                Coming Soon
              </span>
            </div>
          </div>

          {/* X / Twitter - Coming Soon */}
          <div className="flex flex-col items-center gap-6 opacity-40 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0">
            <div className="w-24 h-24 rounded-3xl bg-black border border-neutral-700 flex items-center justify-center">
              <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-neutral-400 font-medium text-xl">X / Twitter</span>
              <span className="px-3 py-1 bg-neutral-800 text-neutral-500 text-xs font-bold rounded-full border border-neutral-700">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Reddit - Coming Soon */}
          <div className="flex flex-col items-center gap-6 opacity-40 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0">
            <div className="w-24 h-24 rounded-3xl bg-[#FF4500] flex items-center justify-center border border-white/10">
              <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-neutral-400 font-medium text-xl">Reddit</span>
              <span className="px-3 py-1 bg-neutral-800 text-neutral-500 text-xs font-bold rounded-full border border-neutral-700">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
