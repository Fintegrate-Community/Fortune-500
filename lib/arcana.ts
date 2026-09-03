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
  glow: string;
};

export const ARCANA: Record<ArcanaId, Arcana> = {
  tower: {
    id: "tower",
    numeral: "XVI",
    name: "The Tower",
    tagline: "Sudden collapse. What looked solid, wasn't.",
    glow: "#e2634f",
  },
  sun: {
    id: "sun",
    numeral: "XIX",
    name: "The Sun",
    tagline: "Unambiguous, radiant, everyone-gets-rich optimism.",
    glow: "#ffcf4d",
  },
  wheel: {
    id: "wheel",
    numeral: "X",
    name: "The Wheel",
    tagline: "What goes down comes up, within the same afternoon.",
    glow: "#4fb8a6",
  },
  "hanged-man": {
    id: "hanged-man",
    numeral: "XII",
    name: "The Hanged Man",
    tagline: "Everything paused, mid-air, by force.",
    glow: "#6f8fd6",
  },
  death: {
    id: "death",
    numeral: "XIII",
    name: "Death",
    tagline: "Not an ending. The bottom, and the start of the next thing.",
    glow: "#57c98c",
  },
  devil: {
    id: "devil",
    numeral: "XV",
    name: "The Devil",
    tagline: "The mania at its most convinced, right before it wasn't.",
    glow: "#d1484a",
  },
  star: {
    id: "star",
    numeral: "XVII",
    name: "The Star",
    tagline: "Relief. The first calm breath after the worst is over.",
    glow: "#f6e08a",
  },
  fool: {
    id: "fool",
    numeral: "0",
    name: "The Fool",
    tagline: "Nobody planned for this. Nobody could have.",
    glow: "#6ea8e0",
  },
  justice: {
    id: "justice",
    numeral: "XI",
    name: "Justice",
    tagline: "The official verdict, rendered in a single session.",
    glow: "#b79ad9",
  },
  chariot: {
    id: "chariot",
    numeral: "VII",
    name: "The Chariot",
    tagline: "Momentum, willed into existence by force of coordination.",
    glow: "#4fbf7f",
  },
};
