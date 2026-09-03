"use client";

import { useState } from "react";
import {
  type Audience,
  getQuestions,
  scoreQuiz,
  type Archetype,
} from "@/lib/personality";

const CARD_HEIGHT = "h-[700px] sm:h-[780px]";

type Step = "choice" | "quiz" | "result";

function PersonalityEmblem() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 sm:h-28 sm:w-28" role="img" aria-hidden="true">
      <g stroke="#ffb000" strokeWidth={1.6} fill="none">
        <circle cx="60" cy="60" r="52" />
        <circle cx="60" cy="60" r="42" strokeOpacity={0.5} />
        <circle cx="48" cy="60" r="20" strokeOpacity={0.9} />
        <circle cx="72" cy="60" r="20" strokeOpacity={0.9} />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x1 = 60 + Math.cos(angle) * 52;
          const y1 = 60 + Math.sin(angle) * 52;
          const x2 = 60 + Math.cos(angle) * 58;
          const y2 = 60 + Math.sin(angle) * 58;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={0.6} />;
        })}
      </g>
    </svg>
  );
}

export default function PersonalityCard() {
  const [revealed, setRevealed] = useState(false);
  const [step, setStep] = useState<Step>("choice");
  const [audience, setAudience] = useState<Audience | null>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Archetype | null>(null);

  const questions = audience ? getQuestions(audience) : [];
  const currentQuestion = questions[index];

  function chooseAudience(a: Audience) {
    setAudience(a);
    setIndex(0);
    setAnswers({});
    setStep("quiz");
  }

  function answer(optionId: string) {
    if (!audience || !currentQuestion) return;
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(nextAnswers);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setResult(scoreQuiz(audience, nextAnswers));
      setStep("result");
    }
  }

  function goBack() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setStep("choice");
      setAudience(null);
    }
  }

  function retake() {
    setStep("choice");
    setAudience(null);
    setIndex(0);
    setAnswers({});
    setResult(null);
  }

  return (
    <div className="[perspective:1600px]">
      <div
        className={`relative w-full ${CARD_HEIGHT}`}
      >
        <div
          className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
            revealed ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT — face down */}
          <button
            type="button"
            onClick={() => setRevealed(true)}
            aria-label="Tap to take your Financial Personality Test"
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-sm border-[3px] border-double border-amber-dim bg-terminal-panel px-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] [backface-visibility:hidden]"
          >
            <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber-dim" />
            <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-amber-dim" />
            <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-amber-dim" />
            <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-amber-dim" />
            <PersonalityEmblem />
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber/60 sm:text-base">
              Personality Test
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl italic text-parchment sm:text-3xl">
              Click to discover your financial personality
            </p>
          </button>

          {/* BACK — the actual test */}
          <div className="absolute inset-0 overflow-y-auto rounded-sm border-[3px] border-double border-amber/60 bg-terminal-black px-6 py-8 text-parchment shadow-[0_0_0_1px_rgba(0,0,0,0.5),0_25px_60px_-15px_rgba(0,0,0,0.8)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-9">
            <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber/50" />
            <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-amber/50" />
            <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-amber/50" />
            <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-amber/50" />

            {step === "choice" && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber/70 sm:text-base">
                  Financial Personality Test
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl italic leading-tight sm:text-4xl">
                  Which describes you?
                </h2>

                <div className="mt-10 flex w-full max-w-sm flex-col gap-4">
                  <button
                    type="button"
                    onClick={() => chooseAudience("adviser")}
                    className="rounded border border-amber/50 px-5 py-4 text-left transition hover:border-amber hover:bg-amber/5"
                  >
                    <span className="block font-[family-name:var(--font-display)] text-xl font-bold">
                      Financial Adviser / Paraplanner
                    </span>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-wide text-parchment/50">
                      A career-grounded professional read
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => chooseAudience("investor")}
                    className="rounded border border-amber/50 px-5 py-4 text-left transition hover:border-amber hover:bg-amber/5"
                  >
                    <span className="block font-[family-name:var(--font-display)] text-xl font-bold">
                      Individual Investor
                    </span>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-wide text-parchment/50">
                      How you actually behave with your own money
                    </span>
                  </button>
                </div>
              </div>
            )}

            {step === "quiz" && currentQuestion && (
              <div className="flex h-full flex-col justify-center">
                <div className="mx-auto w-full max-w-sm">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wide text-parchment/50 sm:text-sm">
                    <span>Question {index + 1} of {questions.length}</span>
                    <span>{audience === "adviser" ? "Adviser" : "Investor"}</span>
                  </div>
                  <div className="mt-2 h-1 w-full rounded-full bg-terminal-line">
                    <div
                      className="h-1 rounded-full bg-amber transition-all"
                      style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl italic leading-snug sm:text-3xl">
                    {currentQuestion.prompt}
                  </h3>

                  <div className="mt-6 flex flex-col gap-3">
                    {currentQuestion.options.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => answer(opt.id)}
                        className="rounded border border-amber/40 px-4 py-3 text-left font-[family-name:var(--font-body)] text-base transition hover:border-amber hover:bg-amber/5 sm:text-lg"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-6 font-mono text-xs uppercase tracking-wide text-parchment/40 transition hover:text-parchment/70"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            )}

            {step === "result" && result && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber/70 sm:text-sm">
                  Your Financial Personality
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-amber sm:text-4xl">
                  {result.name}
                </h2>
                <p className="mx-auto mt-4 max-w-sm font-[family-name:var(--font-body)] text-base leading-relaxed text-parchment/80 sm:text-lg">
                  {result.description}
                </p>

                <div className="mx-auto mt-6 w-full max-w-sm text-left">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-boom-soft">Strong Points</p>
                  <ul className="mt-2 space-y-1.5 font-[family-name:var(--font-body)] text-sm text-parchment/85 sm:text-base">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-boom-soft">+</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mx-auto mt-5 w-full max-w-sm text-left">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-crash-soft">Weak Points</p>
                  <ul className="mt-2 space-y-1.5 font-[family-name:var(--font-body)] text-sm text-parchment/85 sm:text-base">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-crash-soft">−</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={retake}
                  className="mt-7 rounded border border-amber-dim px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-amber transition hover:border-amber sm:text-sm"
                >
                  Retake Test
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
