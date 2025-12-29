"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, User } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  text: string;
  isNegative: boolean;
  time: string;
}

const COMMENTS: Comment[] = [
  {
    id: 1,
    author: "TechFan99",
    text: "This is exactly what I was looking for! Thanks!",
    isNegative: false,
    time: "2 hours ago",
  },
  {
    id: 2,
    author: "HaterOne",
    text: "Nobody asked for this garbage. Waste of time.",
    isNegative: true,
    time: "1 hour ago",
  },
  { id: 3, author: "PositiveVibes", text: "Love the energy in this video ❤️", isNegative: false, time: "45 mins ago" },
  {
    id: 4,
    author: "Critic2024",
    text: "The audio quality is terrible, unwatchable.",
    isNegative: true,
    time: "30 mins ago",
  },
  { id: 5, author: "NeutralUser", text: "First comment.", isNegative: false, time: "10 mins ago" },
  { id: 6, author: "TrollMaster", text: "You should delete your channel tbh.", isNegative: true, time: "5 mins ago" },
];

export function VisualDemo() {
  const [isFiltering, setIsFiltering] = useState(false);

  return (
    <section id="how-it-works" className="py-24 bg-black relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            See the <span className="text-red-600">Reality</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-lg">
            Toggle the switch to remove the toxic positivity and see what people really think.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl relative">
          {/* Header replicating YouTube style */}
          <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/50 backdrop-blur-sm z-10 sticky top-0">
            <h3 className="font-bold text-white text-lg">6 Comments</h3>

            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-400 font-medium">
                {isFiltering ? "OnlyHate ON" : "OnlyHate OFF"}
              </span>
              <button
                onClick={() => setIsFiltering(!isFiltering)}
                className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 ease-in-out ${
                  isFiltering ? "bg-red-600" : "bg-neutral-600"
                }`}
              >
                <motion.div
                  layout
                  className="w-5 h-5 bg-white rounded-full shadow-md"
                  initial={false}
                  animate={{ x: isFiltering ? 28 : 0 }}
                />
              </button>
            </div>
          </div>

          <div className="p-0">
            <AnimatePresence mode="popLayout">
              {COMMENTS.map(
                (comment) =>
                  (!isFiltering || comment.isNegative) && (
                    <motion.div
                      key={comment.id}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 border-b border-neutral-800 last:border-0 hover:bg-neutral-800/20 transition-colors"
                    >
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center shrink-0 text-neutral-400">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-neutral-200">@{comment.author}</span>
                            <span className="text-xs text-neutral-500">{comment.time}</span>
                          </div>
                          <p
                            className={`text-sm leading-relaxed ${
                              comment.isNegative ? "text-red-200" : "text-neutral-300"
                            }`}
                          >
                            {comment.text}
                          </p>
                          <div className="flex items-center gap-4 pt-1">
                            <div className="flex items-center gap-1 text-neutral-500 text-xs">
                              <ThumbsUp className="w-3 h-3" /> <span>24</span>
                            </div>
                            <div className="flex items-center gap-1 text-neutral-500 text-xs">
                              <ThumbsDown className="w-3 h-3" />
                            </div>
                            <button className="text-xs text-neutral-500 font-medium">Reply</button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {isFiltering && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center">
                <p className="text-neutral-500 text-sm italic">Hidden 3 positive/neutral comments.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
