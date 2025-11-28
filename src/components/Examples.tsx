"use client";
import { KeyboardEvent, useEffect, useState } from "react";
import QAModal from "./QAModal";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { AnimatePresence, motion } from "framer-motion";

import { getCompanions } from "./actions";

type CompanionCard = {
  name: string;
  title: string;
  imageUrl: string;
  llm: string;
  phone: string;
};

export default function Examples() {
  const [QAModalOpen, setQAModalOpen] = useState(false);
  const [CompParam, setCompParam] = useState<CompanionCard>({
    name: "",
    title: "",
    imageUrl: "",
    llm: "",
    phone: "",
  });
  const [examples, setExamples] = useState<CompanionCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const companions = await getCompanions();
        const entries: CompanionCard[] = JSON.parse(companions);
        const parsed = Array.isArray(entries)
          ? entries.map((entry) => ({
              name: entry.name,
              title: entry.title,
              imageUrl: entry.imageUrl,
              llm: entry.llm,
              phone: entry.phone,
            }))
          : [];
        setExamples(parsed);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("We couldn’t load the latest companions. Please try again shortly.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cardVariants = {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 12, scale: 0.97 },
  };

  const handleSelect = (example: CompanionCard) => {
    setCompParam(example);
    setQAModalOpen(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>, example: CompanionCard) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSelect(example);
    }
  };

  const hasExamples = examples.length > 0;

  return (
    <div id="ExampleDiv" className="relative">
      <QAModal open={QAModalOpen} setOpen={setQAModalOpen} example={CompParam} />
      <div className="flex flex-col gap-6" aria-live="polite">
        {error && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}
        {loading ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" aria-hidden />
                <div className="relative flex animate-pulse flex-col items-center gap-4 text-center">
                  <div className="h-24 w-24 rounded-full bg-white/10" />
                  <div className="h-4 w-32 rounded-full bg-white/10" />
                  <div className="h-3 w-48 rounded-full bg-white/10" />
                  <div className="h-3 w-40 rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="sync">
            {hasExamples ? (
              <motion.ul
                key="companions"
                role="list"
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {examples.map((example) => (
                  <motion.li
                    key={example.name}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-left transition hover:border-sky-400/60 hover:shadow-[0_40px_90px_-45px_rgba(56,189,248,0.8)] focus-within:border-sky-400/60"
                    onClick={() => handleSelect(example)}
                    onKeyDown={(event) => handleKeyDown(event, example)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open conversation with ${example.name}`}
                  >
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" aria-hidden />
                    <div className="absolute -right-16 top-1/3 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl transition duration-500 group-hover:opacity-80" aria-hidden />
                    <div className="relative flex flex-col items-center gap-4 text-center">
                      <Image
                        width={128}
                        height={128}
                        className="h-24 w-24 rounded-full border border-sky-400/40 object-cover shadow-[0_0_35px_rgba(56,189,248,0.45)]"
                        src={example.imageUrl}
                        alt={example.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{example.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{example.title}</p>
                        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-sky-300/80">
                          Powered by {example.llm}
                        </p>
                      </div>
                      {isPhoneNumber(example.phone) && (
                        <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                          <span role="img" aria-label="Phone">
                            📱
                          </span>
                          <span className="font-semibold text-white">{example.phone}</span>
                          <button
                            type="button"
                            data-tooltip-id="help-tooltip"
                            data-tooltip-content="Enable SMS handoff in your account settings to activate direct texting."
                            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-sky-300/80 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                            aria-label="How to enable SMS support"
                          >
                            <span aria-hidden className="text-xs font-semibold">?</span>
                          </button>
                        </p>
                      )}
                    </div>
                    <span className="sr-only">Select to open the question and answer modal.</span>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-sm text-slate-300"
              >
                Companions are being trained right now. Check back soon for new intelligence drops.
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      <Tooltip
        id="help-tooltip"
        className="!rounded-lg !border !border-white/10 !bg-slate-900/95 !px-3 !py-2 !text-xs !text-slate-100"
        delayShow={100}
      />
    </div>
  );
}

function isPhoneNumber(input: string): boolean {
  const phoneNumberRegex = /^\+\d{1,11}$/;
  return phoneNumberRegex.test(input);
}
