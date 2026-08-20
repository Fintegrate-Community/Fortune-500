export type MarketEvent = {
  id: string;
  date: string; // MM-DD
  year: number;
  index: string;
  movePercent: number; // signed, single-day move
  type: "crash" | "boom" | "quirk" | "turn";
  headline: string;
  blurb: string;
  quip: string;
};

// A curated set of real, documented single-day market events.
// Figures are widely reported approximate closing/intraday moves.
export const EVENTS: MarketEvent[] = [
  { id: "black-monday-1987", date: "10-19", year: 1987, index: "Dow Jones", movePercent: -22.6, type: "crash",
    headline: "Black Monday", blurb: "The largest one-day percentage drop in Dow history. No single cause was ever agreed on, which somehow made it worse.",
    quip: "You were born under the sign of the Portfolio Incinerator. Diversify, and never fully trust a Monday." },
  { id: "black-thursday-1929", date: "10-24", year: 1929, index: "Dow Jones", movePercent: -2.1, type: "crash",
    headline: "Black Thursday", blurb: "Panic selling gripped Wall Street before a group of bankers pooled funds to buy stocks and steady the close.",
    quip: "Your sign is the Bankers' Pool. You cause the panic, then quietly arrange the rescue and take credit for it." },
  { id: "black-tuesday-1929", date: "10-29", year: 1929, index: "Dow Jones", movePercent: -11.7, type: "crash",
    headline: "Black Tuesday", blurb: "The rescue from days earlier failed. This is the session historians point to as the start of the Great Depression.",
    quip: "Born under the Long Reckoning. You believe in consequences, several years' worth, delivered all at once." },
  { id: "black-monday-1929", date: "10-28", year: 1929, index: "Dow Jones", movePercent: -13.5, type: "crash",
    headline: "The Other Black Monday", blurb: "One day before Black Tuesday, and somehow the bigger single-day percentage loss. 1929 did not do things by halves.",
    quip: "You peaked early and did it again the next day. Overachiever energy, badly directed." },
  { id: "tarp-rejected", date: "09-29", year: 2008, index: "Dow Jones", movePercent: -7.0, type: "crash",
    headline: "Congress Says No", blurb: "The House voted down the bank bailout bill. The Dow lost 777 points, its worst single-day point drop at the time.",
    quip: "Your sign is the Rejected Bill. You take 'no' personally, and so does everyone's pension." },
  { id: "lehman", date: "09-15", year: 2008, index: "Dow Jones", movePercent: -4.4, type: "crash",
    headline: "Lehman Brothers Falls", blurb: "The largest bankruptcy filing in US history. The phrase 'too big to fail' got its most expensive counterexample.",
    quip: "You were born the day the music stopped and everyone kept dancing anyway. Bold. Reckless. On brand." },
  { id: "covid-black-monday", date: "03-09", year: 2020, index: "Dow Jones", movePercent: -7.8, type: "crash",
    headline: "Oil, Meet Pandemic", blurb: "A Saudi-Russia price war collided with the first wave of pandemic fear. Trading halted within minutes of the open.",
    quip: "Your sign is the Circuit Breaker. You know exactly how far things can fall before someone hits pause." },
  { id: "covid-black-thursday", date: "03-12", year: 2020, index: "Dow Jones", movePercent: -10.0, type: "crash",
    headline: "The WHO Calls It a Pandemic", blurb: "One trading day after the pandemic was officially declared, markets recorded their worst session since 1987.",
    quip: "You were born the day the word finally caught up to the fear. Direct. Unsentimental. Slightly terrifying." },
  { id: "covid-worst", date: "03-16", year: 2020, index: "S&P 500", movePercent: -12.0, type: "crash",
    headline: "The Worst of It", blurb: "The single worst trading day of the pandemic crash, and the worst since Black Monday 1987.",
    quip: "Your sign is Peak Panic. You don't do things by half measures, ever." },
  { id: "covid-bottom", date: "03-23", year: 2020, index: "S&P 500", movePercent: 0.5, type: "turn",
    headline: "The Quiet Bottom", blurb: "With no fanfare, this was the lowest close of the pandemic crash. The market would not see this level again.",
    quip: "You were born on the turn nobody noticed until much later. Patient. Vindicated in hindsight. Insufferable about it." },
  { id: "flash-crash", date: "05-06", year: 2010, index: "Dow Jones", movePercent: -3.2, type: "quirk",
    headline: "The Flash Crash", blurb: "The Dow plunged nearly 9% in minutes on automated trading gone wrong, then clawed most of it back before the close.",
    quip: "Your sign is the Fat Finger. You overreact spectacularly, then pretend nothing happened twenty minutes later." },
  { id: "gme-squeeze", date: "01-27", year: 2021, index: "GameStop (GME)", movePercent: 135.0, type: "quirk",
    headline: "The GameStop Squeeze", blurb: "A Reddit forum cornered hedge funds betting against a struggling game retailer. GME gained 135% in a single session.",
    quip: "You were born under the sign of the Diamond Hands. You hold on principle, long after the principle stops paying." },
  { id: "gme-halt", date: "01-28", year: 2021, index: "GameStop (GME)", movePercent: -44.0, type: "quirk",
    headline: "The Buy Button Disappears", blurb: "Trading apps abruptly restricted purchases of the stock everyone was talking about. The rally cracked, briefly.",
    quip: "Your sign is the Restricted Trade. The house changes the rules the moment you start winning." },
  { id: "dotcom-peak", date: "03-10", year: 2000, index: "Nasdaq", movePercent: 0.0, type: "turn",
    headline: "The Dot-Com Peak", blurb: "The Nasdaq closed at what was then an all-time high. It would not reclaim this level for 15 years.",
    quip: "You were born at the absolute top, right before everyone else realised it was the top. Impeccable, tragic timing." },
  { id: "dotcom-bottom", date: "10-09", year: 2002, index: "Nasdaq", movePercent: 0.5, type: "turn",
    headline: "The Dot-Com Bottom", blurb: "After a 78% collapse from the peak, the Nasdaq finally found its floor on this date and began to recover.",
    quip: "Your sign is the Long Way Back. You've seen the worst of it, and you're still standing. Mostly." },
  { id: "brexit", date: "06-24", year: 2016, index: "FTSE 100", movePercent: -3.15, type: "crash",
    headline: "The Referendum Result", blurb: "The pound suffered its steepest one-day fall in decades and the FTSE swung wildly as the UK voted to leave the EU.",
    quip: "You were born under the sign of the Narrow Result. You make decisions by the smallest possible margin, then live with them loudly." },
  { id: "china-2015", date: "08-24", year: 2015, index: "Dow Jones", movePercent: -3.6, type: "crash",
    headline: "China's Black Monday", blurb: "A surprise currency devaluation in China triggered a global selloff. The Dow fell over 1,000 points intraday before recovering some ground.",
    quip: "Your sign is the Overseas Tremor. Trouble somewhere else always finds its way to your doorstep." },
  { id: "volmageddon", date: "02-05", year: 2018, index: "Dow Jones", movePercent: -4.6, type: "crash",
    headline: "Volmageddon", blurb: "A popular bet against market volatility imploded overnight, wiping out funds built entirely on things staying calm.",
    quip: "You were born the day calm itself got margin-called. Never bet against your own chaos." },
  { id: "g7-rally", date: "10-13", year: 2008, index: "Dow Jones", movePercent: 11.1, type: "boom",
    headline: "The G7 Rally", blurb: "Coordinated central bank action sparked the biggest single-day point gain in Dow history at the time, one day after its worst week ever.",
    quip: "Your sign is the Coordinated Rescue. You need seven governments to agree before you have a good day, but when you do, it's a great one." },
  { id: "crisis-rally-2", date: "10-28", year: 2008, index: "Dow Jones", movePercent: 10.9, type: "boom",
    headline: "Another Wild Swing", blurb: "Two weeks after Lehman, the Dow posted its second-biggest point gain ever, proof the 2008 crisis had no interest in a steady rhythm.",
    quip: "You were born mid-whiplash. Up is just down that hasn't happened yet." },
  { id: "fed-cuts-zero", date: "12-16", year: 2008, index: "Dow Jones", movePercent: 4.2, type: "boom",
    headline: "Rates Hit Zero", blurb: "The Federal Reserve cut its benchmark rate to near zero for the first time ever, and markets rallied on the news.",
    quip: "Your sign is Free Money. You've never met a problem that a lower interest rate couldn't temporarily fix." },
  { id: "xmas-eve-massacre", date: "12-24", year: 2018, index: "Dow Jones", movePercent: -2.9, type: "crash",
    headline: "The Christmas Eve Massacre", blurb: "The worst Christmas Eve session on record. Traders left their desks for the holiday in a genuinely foul mood.",
    quip: "You were born under the sign of Ruined Festivities. You have a gift for showing up right as the mood turns." },
  { id: "boxing-day-rally", date: "12-26", year: 2018, index: "Dow Jones", movePercent: 5.0, type: "boom",
    headline: "The Boxing Day Rebound", blurb: "The day after the Christmas Eve Massacre, the Dow posted its biggest point gain in history at the time.",
    quip: "Your sign is the Sympathy Bounce. You feel bad about yesterday for exactly one day, then move on completely." },
  { id: "9-11-reopen", date: "09-17", year: 2001, index: "Dow Jones", movePercent: -7.1, type: "crash",
    headline: "Markets Reopen", blurb: "After the longest trading halt since 1933, markets reopened following the September 11 attacks to a historic point drop.",
    quip: "You were born the day the bell rang again after everyone wondered if it should. Steady, under impossible circumstances." },
  { id: "downgrade-monday", date: "08-08", year: 2011, index: "Dow Jones", movePercent: -5.6, type: "crash",
    headline: "The US Credit Downgrade", blurb: "The first Monday after the US lost its AAA credit rating for the first time ever. Markets did not take it well.",
    quip: "Your sign is the Lost Rating. Even the safest bets in your life come with an asterisk now." },
  { id: "downgrade-rebound", date: "08-09", year: 2011, index: "Dow Jones", movePercent: 4.0, type: "boom",
    headline: "The Whiplash Continues", blurb: "One volatile day after the downgrade selloff, the Fed pledged to hold rates near zero and the Dow snapped back hard.",
    quip: "You were born mid-recovery from a crisis that hadn't actually finished yet. Premature relief is your love language." },
  { id: "asian-crisis-1997", date: "10-27", year: 1997, index: "Dow Jones", movePercent: -7.2, type: "crash",
    headline: "The Asian Contagion Hits Home", blurb: "Fallout from the Asian financial crisis triggered the first-ever use of the new circuit breaker rules, halting trading twice.",
    quip: "Your sign is the Imported Crisis. Someone else's problem, six time zones away, somehow becomes entirely yours by lunchtime." },
  { id: "carry-trade-unwind", date: "08-05", year: 2024, index: "Nikkei 225", movePercent: -12.4, type: "crash",
    headline: "The Global Rout", blurb: "A sudden unwind of the yen carry trade sent Japan's Nikkei to its worst day since 1987, dragging US and European markets down with it.",
    quip: "You were born the day everyone remembered leverage runs in both directions. Interconnected, dramatic, expensive." },
  { id: "nasdaq-2022-peak", date: "01-03", year: 2022, index: "Nasdaq", movePercent: 0.0, type: "turn",
    headline: "One Last Record High", blurb: "The Nasdaq closed at a record high on this date, hours before a year-long rate-driven selloff began in earnest.",
    quip: "Your sign is the Last Good Day. You throw the best party right before the lights come up." },
  { id: "bear-market-confirmed", date: "06-13", year: 2022, index: "S&P 500", movePercent: -3.9, type: "crash",
    headline: "Bear Market, Officially", blurb: "A hotter than expected inflation report pushed the S&P 500 down 20% from its peak, the formal threshold for a bear market.",
    quip: "You were born under the sign of the Official Confirmation. You need paperwork before you admit things have gone wrong." },
  { id: "cpi-whiplash", date: "10-13", year: 2022, index: "S&P 500", movePercent: 2.6, type: "quirk",
    headline: "The Inflation Day U-Turn", blurb: "The S&P 500 fell as much as 2.4% within minutes of a hot inflation print, then reversed to close up 2.6%, one of the sharpest intraday swings on record.",
    quip: "Your sign is the Total Reversal. Nobody, including you, knows how you'll feel by the end of the day." },
  { id: "kennedy-slide", date: "05-28", year: 1962, index: "Dow Jones", movePercent: -5.7, type: "crash",
    headline: "The Kennedy Slide", blurb: "A sudden, unexplained rout that briefly rivalled 1929 in the memories of traders who lived through both.",
    quip: "Your sign is the Unexplained Rout. Sometimes the market just has a bad day and nobody can say why." },
  { id: "gulf-war-rally", date: "01-17", year: 1991, index: "Dow Jones", movePercent: 4.6, type: "boom",
    headline: "Operation Desert Storm Begins", blurb: "Markets rallied hard the day the Gulf War began, relieved that the uncertainty of 'will it happen' was finally over.",
    quip: "Your sign is Relief Through Certainty. Bad news you can plan for beats good news you're still waiting on." },
  { id: "jfk-market-closes", date: "11-22", year: 1963, index: "Dow Jones", movePercent: -2.9, type: "crash",
    headline: "Markets Close Early", blurb: "The New York Stock Exchange closed early following the assassination of President Kennedy, one of the few times it has done so.",
    quip: "You were born under the sign of the Early Close. You know when a day is over before anyone announces it." },
  { id: "jfk-rebound", date: "11-26", year: 1963, index: "Dow Jones", movePercent: 4.5, type: "boom",
    headline: "The Market Reopens", blurb: "The first full session after the assassination weekend saw one of the strongest rebounds of the decade.",
    quip: "Your sign is the Composed Return. You grieve fully, then get straight back to business." },
  { id: "dotcom-single-worst", date: "04-14", year: 2000, index: "Nasdaq", movePercent: -9.7, type: "crash",
    headline: "The Friday the Bubble Bled Out", blurb: "One of the worst single sessions of the dot-com crash, as investors finally stopped pretending profits didn't matter.",
    quip: "Your sign is the Overdue Correction. You always arrive fashionably late to reality." },
  { id: "negative-oil", date: "04-20", year: 2020, index: "WTI Crude Oil", movePercent: -305.97, type: "quirk",
    headline: "Oil Goes Negative", blurb: "For the first time in history, US oil futures traded below zero. Producers briefly paid buyers to take barrels off their hands.",
    quip: "Your sign is Negative Value. You've had days where you'd pay someone just to take the problem away, and one day, so did the entire oil market." },
  { id: "crowdstrike-outage", date: "07-19", year: 2024, index: "Global Markets", movePercent: -0.7, type: "quirk",
    headline: "The Blue Screen Heard Round the World", blurb: "A single flawed software update grounded flights, froze hospitals, and rattled markets worldwide, a reminder of how much rides on one update.",
    quip: "Your sign is the Bad Update. One small mistake, and suddenly it's everyone's Friday that's ruined." },
  { id: "mag7-selloff", date: "07-24", year: 2024, index: "Nasdaq", movePercent: -3.6, type: "crash",
    headline: "Big Tech Wobbles", blurb: "The Nasdaq's worst day in nearly two years as investors questioned whether AI spending would ever pay off.",
    quip: "Your sign is the Expensive Question. You believe in the story, right up until someone asks for the receipts." },
  { id: "china-mini-crash-2007", date: "02-27", year: 2007, index: "Dow Jones", movePercent: -3.3, type: "crash",
    headline: "The Shanghai Surprise", blurb: "A sudden selloff in Chinese shares spread globally overnight, a preview of how connected markets had become.",
    quip: "Your sign is the Overnight Surprise. You go to bed with everything fine and wake up to a completely different mood." },
];

export function findClosestEvent(month: number, day: number, year?: number): { event: MarketEvent; exact: boolean; daysAway: number } {
  const target = month * 31 + day; // rough ordinal, fine for nearest-neighbour on a circular year
  let best: MarketEvent | null = null;
  let bestDist = Infinity;
  let bestExact = false;

  const exactMatches = EVENTS.filter(e => {
    const [m, d] = e.date.split("-").map(Number);
    return m === month && d === day;
  });

  if (exactMatches.length > 0) {
    const chosen = year
      ? exactMatches.reduce((a, b) => Math.abs(a.year - year) < Math.abs(b.year - year) ? a : b)
      : exactMatches[0];
    return { event: chosen, exact: true, daysAway: 0 };
  }

  for (const e of EVENTS) {
    const [m, d] = e.date.split("-").map(Number);
    const pos = m * 31 + d;
    let dist = Math.abs(pos - target);
    dist = Math.min(dist, 372 - dist); // wrap around the year
    if (dist < bestDist) {
      bestDist = dist;
      best = e;
      bestExact = false;
    }
  }

  return { event: best as MarketEvent, exact: bestExact, daysAway: Math.round(bestDist / 31) };
}

export function getDistribution() {
  const total = EVENTS.length;
  const counts = { crash: 0, boom: 0, quirk: 0, turn: 0 };
  for (const e of EVENTS) counts[e.type]++;
  return {
    total,
    crashPct: Math.round((counts.crash / total) * 100),
    boomPct: Math.round((counts.boom / total) * 100),
    quirkPct: Math.round(((counts.quirk + counts.turn) / total) * 100),
  };
}
