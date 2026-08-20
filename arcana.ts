export type ArcanaId =
  | "tower"
  | "sun"
  | "wheel"
  | "hanged-man"
  | "death"
  | "devil"
  | "star"
  | "fool"
  | "justice"
  | "chariot";

export type Arcana = {
  id: ArcanaId;
  numeral: string;
  name: string;
  tagline: string;
};

export const ARCANA: Record<ArcanaId, Arcana> = {
  tower: {
    id: "tower",
    numeral: "XVI",
    name: "The Tower",
    tagline: "Sudden collapse. What looked solid, wasn't.",
  },
  sun: {
    id: "sun",
    numeral: "XIX",
    name: "The Sun",
    tagline: "Unambiguous, radiant, everyone-gets-rich optimism.",
  },
  wheel: {
    id: "wheel",
    numeral: "X",
    name: "The Wheel",
    tagline: "What goes down comes up, within the same afternoon.",
  },
  "hanged-man": {
    id: "hanged-man",
    numeral: "XII",
    name: "The Hanged Man",
    tagline: "Everything paused, mid-air, by force.",
  },
  death: {
    id: "death",
    numeral: "XIII",
    name: "Death",
    tagline: "Not an ending. The bottom, and the start of the next thing.",
  },
  devil: {
    id: "devil",
    numeral: "XV",
    name: "The Devil",
    tagline: "The mania at its most convinced, right before it wasn't.",
  },
  star: {
    id: "star",
    numeral: "XVII",
    name: "The Star",
    tagline: "Relief. The first calm breath after the worst is over.",
  },
  fool: {
    id: "fool",
    numeral: "0",
    name: "The Fool",
    tagline: "Nobody planned for this. Nobody could have.",
  },
  justice: {
    id: "justice",
    numeral: "XI",
    name: "Justice",
    tagline: "The official verdict, rendered in a single session.",
  },
  chariot: {
    id: "chariot",
    numeral: "VII",
    name: "The Chariot",
    tagline: "Momentum, willed into existence by force of coordination.",
  },
};
