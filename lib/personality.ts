export type Audience = "adviser" | "investor";

export type QuizOption = {
  id: string;
  label: string;
  scores: Record<string, number>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export type Archetype = {
  id: string;
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
};

// ---------- ADVISER / FINANCIAL PROFESSIONAL ----------
// Grounded in career facts and professional judgement rather than
// self-reported risk psychology, since advisers are trained to give the
// "correct" answer on standard risk-tolerance questions.

export const ADVISER_QUESTIONS: QuizQuestion[] = [
  {
    id: "career-start",
    prompt: "When did you start advising?",
    options: [
      { id: "pre-2000", label: "Before 2000", scores: { dotcom: 3 } },
      { id: "2000-2007", label: "2000 to 2007", scores: { dotcom: 2, gfc: 1 } },
      { id: "2008-2012", label: "2008 to 2012", scores: { gfc: 3 } },
      { id: "2013-2019", label: "2013 to 2019", scores: { rate2022: 1, steady: 2 } },
      { id: "2020-plus", label: "2020 onwards", scores: { covid: 3 } },
    ],
  },
  {
    id: "defining-event",
    prompt: "Which market event most changed how you advise clients?",
    options: [
      { id: "dotcom", label: "The dot-com crash", scores: { dotcom: 3 } },
      { id: "gfc", label: "The 2008 financial crisis", scores: { gfc: 3 } },
      { id: "covid", label: "The 2020 COVID crash", scores: { covid: 3 } },
      { id: "rate2022", label: "The 2022 rate shock", scores: { rate2022: 3 } },
      { id: "none", label: "None have significantly changed my approach", scores: { steady: 3 } },
    ],
  },
  {
    id: "client-call",
    prompt: "A client calls after a sudden 10% portfolio drop wanting to move to cash. What's your first move?",
    options: [
      { id: "data", label: "Walk them through the data and historical recovery patterns", scores: { steady: 2, gfc: 1 } },
      { id: "plan", label: "Revisit their original plan and risk capacity together", scores: { rate2022: 1, steady: 1 } },
      { id: "hold", label: "Hold the line and let the emotion pass before discussing anything", scores: { covid: 1, dotcom: 1 } },
      { id: "escalate", label: "Loop in a second adviser or compliance for a joint conversation", scores: { gfc: 2 } },
    ],
  },
  {
    id: "active-passive",
    prompt: "Active or passive, where do you sit?",
    options: [
      { id: "active", label: "Firmly active, I believe in manager selection", scores: { dotcom: 1 } },
      { id: "passive", label: "Firmly passive, cost and consistency win", scores: { rate2022: 1, steady: 1 } },
      { id: "blend", label: "A blend depending on the client", scores: { covid: 1 } },
      { id: "depends", label: "It depends entirely on the asset class", scores: { gfc: 1 } },
    ],
  },
  {
    id: "rebalance",
    prompt: "How often do you rebalance client portfolios?",
    options: [
      { id: "fixed", label: "On a fixed schedule regardless of markets", scores: { steady: 1 } },
      { id: "threshold", label: "Only when drift exceeds a set threshold", scores: { rate2022: 1 } },
      { id: "reactive", label: "Reactively, when markets move significantly", scores: { covid: 1, gfc: 1 } },
      { id: "rarely", label: "Rarely, we let winners run", scores: { dotcom: 1 } },
    ],
  },
  {
    id: "committee",
    prompt: "In an investment committee, are you usually the one pushing for change or holding consensus?",
    options: [
      { id: "push", label: "I push for change", scores: { covid: 1, dotcom: 1 } },
      { id: "hold", label: "I hold consensus", scores: { steady: 1, gfc: 1 } },
      { id: "swing", label: "I'm the swing vote", scores: { rate2022: 1 } },
      { id: "depends", label: "Depends entirely on the topic", scores: {} },
    ],
  },
  {
    id: "herd",
    prompt: "Which best describes your take on herd behaviour in markets?",
    options: [
      { id: "act-early", label: "It's a signal to act early", scores: { covid: 1 } },
      { id: "wait", label: "It's a signal to wait it out", scores: { gfc: 1 } },
      { id: "noise", label: "It's noise, I ignore it", scores: { steady: 1 } },
      { id: "contrarian", label: "It's an opportunity to be contrarian", scores: { dotcom: 1, rate2022: 1 } },
    ],
  },
];

export const ADVISER_ARCHETYPES: Record<string, Archetype> = {
  dotcom: {
    id: "dotcom",
    name: "The Dot-Com Veteran",
    description:
      "You cut your teeth when the market's love for a good story outran its patience for a good balance sheet. That era left you permanently sceptical of hype.",
    strengths: [
      "Sceptical of narrative-driven valuations",
      "Comfortable saying no to a fashionable trade",
      "Strong instinct for separating signal from noise",
    ],
    weaknesses: [
      "Can be slow to back genuinely disruptive ideas",
      "Occasionally over-indexes on caution",
      "May undervalue momentum as a real, if temporary, force",
    ],
  },
  gfc: {
    id: "gfc",
    name: "The 2008 Realist",
    description:
      "The financial crisis taught you that systemic risk is real, contagion is fast, and \u201ctoo big to fail\u201d is a promise, not a guarantee. You plan for the tail, not just the average.",
    strengths: [
      "Rigorous about diversification and counterparty risk",
      "Calm and procedural under real pressure",
      "Strong grasp of how liquidity crises actually unfold",
    ],
    weaknesses: [
      "Can be overly defensive in strong bull markets",
      "May layer on more process than a situation needs",
      "Sometimes underweights how quickly recoveries happen",
    ],
  },
  covid: {
    id: "covid",
    name: "The COVID Sprinter",
    description:
      "You learned that a crisis can arrive and reverse within the same fiscal quarter. Speed, not just conviction, is now part of how you operate.",
    strengths: [
      "Comfortable acting decisively under uncertainty",
      "Quick to reassess when new information lands",
      "Good at helping clients separate panic from strategy",
    ],
    weaknesses: [
      "Can move faster than the evidence sometimes warrants",
      "May underestimate slower-moving structural risks",
      "Occasionally expects V-shaped recoveries that don't come",
    ],
  },
  rate2022: {
    id: "rate2022",
    name: "The Rate-Shock Pragmatist",
    description:
      "Cheap money ended on your watch, and you had to relearn what duration risk actually costs. You're precise about the mechanics now, not just the sentiment.",
    strengths: [
      "Sharp on how rate moves flow through a portfolio",
      "Disciplined about matching risk to time horizon",
      "Comfortable having unglamorous conversations about yield",
    ],
    weaknesses: [
      "Can be too focused on macro over stock-specific factors",
      "May be slower to re-risk once conditions ease",
      "Sometimes overweights the rate story versus other drivers",
    ],
  },
  steady: {
    id: "steady",
    name: "The Steady Hand",
    description:
      "No single crash defines your approach, which is its own kind of edge. You're less reactive to any one era's lessons, and more focused on a process that works across all of them.",
    strengths: [
      "Consistent process regardless of market noise",
      "Less prone to overcorrecting from a single bad memory",
      "Easy to build repeatable, explainable client conversations around",
    ],
    weaknesses: [
      "Can underweight lessons that only a real crisis teaches",
      "May be untested by a genuine tail event",
      "Risk of confidence outpacing experience in a real shock",
    ],
  },
};

// ---------- INVESTOR / NON-PROFESSIONAL ----------

export const INVESTOR_QUESTIONS: QuizQuestion[] = [
  {
    id: "experience",
    prompt: "How long have you been investing?",
    options: [
      { id: "lt1", label: "Less than a year", scores: { fomo: 1 } },
      { id: "1-5", label: "1 to 5 years", scores: { fomo: 1, checker: 1 } },
      { id: "5-15", label: "5 to 15 years", scores: { compounder: 1 } },
      { id: "15plus", label: "15+ years", scores: { compounder: 2 } },
    ],
  },
  {
    id: "drop-reaction",
    prompt: "Your portfolio drops 15% in a month. What do you actually do?",
    options: [
      { id: "obsess", label: "Check it obsessively, several times a day", scores: { checker: 3 } },
      { id: "sell-some", label: "Sell some of it to feel safer", scores: { fomo: 2, checker: 1 } },
      { id: "ignore", label: "Do nothing, don't even look", scores: { passenger: 3 } },
      { id: "buy-more", label: "Buy more, it's a discount", scores: { contrarian: 3 } },
    ],
  },
  {
    id: "how-picked",
    prompt: "How did you pick your investments?",
    options: [
      { id: "recommended", label: "Recommended by a friend or advisor", scores: { passenger: 2 } },
      { id: "researched", label: "Researched extensively myself", scores: { compounder: 2, contrarian: 1 } },
      { id: "impulse", label: "Somewhat randomly, on impulse", scores: { fomo: 3 } },
      { id: "index", label: "Index funds, and forget about it", scores: { compounder: 3, passenger: 1 } },
    ],
  },
  {
    id: "headline",
    prompt: "A headline says \u201cMarkets in Turmoil.\u201d Your reaction?",
    options: [
      { id: "curious", label: "Mildly curious, keep scrolling", scores: { compounder: 2 } },
      { id: "anxious", label: "Anxious, check my portfolio immediately", scores: { checker: 3 } },
      { id: "ignore", label: "Ignore it entirely", scores: { passenger: 2 } },
      { id: "excited", label: "Excited, this might be an opportunity", scores: { contrarian: 3 } },
    ],
  },
  {
    id: "friend-tip",
    prompt: "A friend made 40% on a hot stock tip. Your reaction?",
    options: [
      { id: "ask", label: "Ask for the tip", scores: { fomo: 3 } },
      { id: "nothing", label: "Feel nothing, not really my style", scores: { compounder: 2, passenger: 1 } },
      { id: "fomo-pang", label: "Feel a pang of FOMO but don't act on it", scores: { checker: 2 } },
      { id: "already-own", label: "Already own it, obviously", scores: { contrarian: 2, fomo: 1 } },
    ],
  },
  {
    id: "timeframe",
    prompt: "What's your investing timeframe, honestly?",
    options: [
      { id: "daily", label: "Day to day, I like watching it move", scores: { checker: 3 } },
      { id: "months", label: "A few months", scores: { fomo: 2 } },
      { id: "years", label: "Several years", scores: { compounder: 2 } },
      { id: "decades", label: "Decades, this is for retirement", scores: { compounder: 3, passenger: 1 } },
    ],
  },
  {
    id: "panic-selling",
    prompt: "Everyone around you is panic selling. What do you do?",
    options: [
      { id: "join", label: "Join them, better safe than sorry", scores: { fomo: 3 } },
      { id: "hold", label: "Hold firm, ride it out", scores: { compounder: 3 } },
      { id: "buy-signal", label: "See it as a buying signal", scores: { contrarian: 3 } },
      { id: "unaware", label: "Don't know, I don't watch closely enough to notice", scores: { passenger: 3 } },
    ],
  },
];

export const INVESTOR_ARCHETYPES: Record<string, Archetype> = {
  compounder: {
    id: "compounder",
    name: "The Steady Compounder",
    description:
      "You treat investing like a long, quiet, extremely effective habit. Time in the market beats timing the market, and you've internalised that completely.",
    strengths: [
      "Genuinely long time horizon",
      "Resistant to short-term noise",
      "Low-cost, low-drama approach that compounds well",
    ],
    weaknesses: [
      "Can be slow to react to genuinely new information",
      "May hold outdated positions out of sheer inertia",
      "Sometimes mistakes stubbornness for conviction",
    ],
  },
  checker: {
    id: "checker",
    name: "The Anxious Checker",
    description:
      "You feel every basis point. Your portfolio app is probably one of your most-opened, and market volatility shows up in your mood before it shows up in your statement.",
    strengths: [
      "Highly engaged and informed about your own holdings",
      "Quick to notice when something's genuinely changed",
      "Rarely blindsided by news, you saw it coming",
    ],
    weaknesses: [
      "Checking frequency rarely improves decisions",
      "Vulnerable to acting on short-term noise",
      "Risk of stress outweighing the financial benefit of investing at all",
    ],
  },
  contrarian: {
    id: "contrarian",
    name: "The Contrarian Opportunist",
    description:
      "Other people's panic looks like your opportunity. You're genuinely energised by a selloff, which is either a real edge or a very expensive personality trait, sometimes both.",
    strengths: [
      "Willing to act when others freeze",
      "Comfortable buying into weakness",
      "Independent-minded, not led by the crowd",
    ],
    weaknesses: [
      "Contrarian isn't always correct, sometimes the crowd is right",
      "Can mistake a falling knife for a bargain",
      "Risk of concentrating too much conviction in one call",
    ],
  },
  fomo: {
    id: "fomo",
    name: "The FOMO Chaser",
    description:
      "You go where the excitement is. This has occasionally worked out brilliantly and occasionally not, and you know exactly which trades belong in each category.",
    strengths: [
      "Genuinely open to new ideas and opportunities",
      "Comfortable taking action rather than overthinking",
      "Good at spotting momentum early, even if imperfectly",
    ],
    weaknesses: [
      "Prone to buying near the top of a hype cycle",
      "Timeframe often shrinks under excitement",
      "Can chase the last good trade instead of the next one",
    ],
  },
  passenger: {
    id: "passenger",
    name: "The Hands-Off Passenger",
    description:
      "Investing happens somewhere in the background of your life, which is either admirably low-stress or a little too casual, depending on how it's going.",
    strengths: [
      "Immune to panic-driven mistakes",
      "Low emotional cost, genuinely stress-free approach",
      "Naturally resistant to overtrading",
    ],
    weaknesses: [
      "Can miss genuinely important changes worth acting on",
      "Risk of drift, since no one's checking if the plan still fits",
      "Passive by default rather than by informed choice",
    ],
  },
};

export function getQuestions(audience: Audience): QuizQuestion[] {
  return audience === "adviser" ? ADVISER_QUESTIONS : INVESTOR_QUESTIONS;
}

export function getArchetypes(audience: Audience): Record<string, Archetype> {
  return audience === "adviser" ? ADVISER_ARCHETYPES : INVESTOR_ARCHETYPES;
}

export function scoreQuiz(audience: Audience, answers: Record<string, string>): Archetype {
  const questions = getQuestions(audience);
  const archetypes = getArchetypes(audience);
  const totals: Record<string, number> = {};

  for (const q of questions) {
    const selectedId = answers[q.id];
    const option = q.options.find((o) => o.id === selectedId);
    if (!option) continue;
    for (const [archetypeId, points] of Object.entries(option.scores)) {
      totals[archetypeId] = (totals[archetypeId] ?? 0) + points;
    }
  }

  let bestId: string | null = null;
  let bestScore = -Infinity;
  for (const id of Object.keys(archetypes)) {
    const score = totals[id] ?? 0;
    if (score > bestScore) {
      bestScore = score;
      bestId = id;
    }
  }

  return archetypes[bestId as string];
}
