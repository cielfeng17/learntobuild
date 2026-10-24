import { loadFont as loadNotoSansSC } from "@remotion/google-fonts/NotoSansSC";
import { loadFont as loadNotoSerifSC } from "@remotion/google-fonts/NotoSerifSC";

// The chinese-simplified chunks also cover basic Latin, so no separate latin subset is needed.
export const { fontFamily: serifFamily } = loadNotoSerifSC("normal", {
  weights: ["500", "700"],
  subsets: ["chinese-simplified"],
  ignoreTooManyRequestsWarning: true,
});

export const { fontFamily: sansFamily } = loadNotoSansSC("normal", {
  weights: ["500", "700"],
  subsets: ["chinese-simplified"],
  ignoreTooManyRequestsWarning: true,
});
