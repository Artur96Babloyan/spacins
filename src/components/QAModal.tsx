"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useCompletion } from "ai/react";

var last_name = "";

export default function QAModal({
  open,
  setOpen,
  example,
}: {
  open: boolean;
  setOpen: any;
  example: any;
}) {
  const [apiError, setApiError] = useState<string | null>(null);

  if (!example) {
    // create a dummy so the completion doesn't croak during init.
    example = new Object();
    example.llm = "";
    example.name = "";
  }

  const {
    completion,
    input,
    isLoading,
    handleInputChange,
    handleSubmit: originalHandleSubmit,
    stop,
    setInput,
    setCompletion,
    error,
  } = useCompletion({
    api: example.llm ? "/api/" + example.llm : undefined,
    headers: example.name ? { name: example.name } : undefined,
    onError: (error) => {
      console.error("API Error:", error);
      setApiError("Unable to connect to the companion. Please ensure you're signed in and try again.");
    },
  });

  useEffect(() => {
    if (error) {
      setApiError("Unable to connect to the companion. Please ensure you're signed in and try again.");
    } else {
      setApiError(null);
    }
  }, [error]);

  if (!example || !example.llm) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);
    if (originalHandleSubmit) {
      originalHandleSubmit(e);
    }
  };

  const handleClose = () => {
    setInput("");
    setCompletion("");
    stop();
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 px-6 py-6 text-left shadow-[0_55px_120px_-50px_rgba(56,189,248,0.65)] transition-all sm:my-8 sm:p-8">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" aria-hidden />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Dialog.Title className="text-xl font-semibold leading-7 text-white">
                        Chat with {example.name || "your companion"}
                      </Dialog.Title>
                      <p className="mt-1 text-sm text-slate-300">
                        Powered by <span className="font-semibold text-sky-300">{example.llm || "your selected model"}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-sky-400/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                      Close
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <label htmlFor="companion-question" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                      Ask anything
                    </label>
                    <input
                      id="companion-question"
                      placeholder="Describe what you need help with..."
                      className={`w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 shadow-[0_15px_45px_-35px_rgba(14,165,233,0.8)] transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${isLoading && !completion ? "cursor-not-allowed text-slate-500" : ""
                        }`}
                      value={input}
                      onChange={handleInputChange}
                      disabled={isLoading && !completion}
                      aria-label="Send a new message to the AI companion"
                    />
                  </form>

                  {apiError && (
                    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {apiError}
                    </div>
                  )}

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                      Live response
                    </p>
                    <div className="mt-3 min-h-[120px] rounded-xl bg-slate-950/60 p-4 shadow-inner">
                      {completion ? (
                        <p className="text-sm leading-6 text-slate-200" aria-live="polite">
                          {completion}
                        </p>
                      ) : (
                        <p className="text-sm text-slate-500">
                          Ask a question to start a dialogue. Responses stream in real time.
                        </p>
                      )}
                    </div>
                    {isLoading && !completion && (
                      <div className="mt-4 flex items-center justify-center gap-2" aria-live="polite">
                        <span className="h-2 w-2 animate-ping rounded-full bg-sky-400" />
                        <span className="h-2 w-2 animate-ping rounded-full bg-sky-400 [animation-delay:150ms]" />
                        <span className="h-2 w-2 animate-ping rounded-full bg-sky-400 [animation-delay:300ms]" />
                        <span className="text-xs text-slate-300">Generating insight...</span>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
