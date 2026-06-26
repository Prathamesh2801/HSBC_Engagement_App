import picturePerfectLogo from "../../assets/games/PICTURE_PERFECT.png";
import royalChaseLogo from "../../assets/games/ROYAL_CHASE.png";
import royalNinjaLogo from "../../assets/games/ROYAL_NINJA.png";
import wordHuntLogo from "../../assets/games/WORD_HUNT.png";
import reelLogo from "../../assets/games/REEL.png";

// External games open in a new tab via `href` (URLs to be provided).
// Reel is an internal page reached via `to`, and is always the last option.
export const games = [
  {
    id: "picture-perfect",
    name: "Picture Perfect",
    image: picturePerfectLogo,
    href: "https://secret-spots-quiz-zeal-hsbc.vercel.app/",
  },
  {
    id: "royal-chase",
    name: "Royal Chase",
    image: royalChaseLogo,
    href: null,
  },
  {
    id: "royal-ninja",
    name: "Royal Ninja",
    image: royalNinjaLogo,
    href: null,
  },
  {
    id: "word-hunt",
    name: "Word Hunt",
    image: wordHuntLogo,
    href: null,
  },
  {
    id: "reel",
    name: "Reel",
    image: reelLogo,
    to: "/reel",
  },
];
