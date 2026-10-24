import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import { sansFamily, serifFamily } from "../fonts";

type TitleSceneProps = {
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const TitleSceneInner: React.FC<TitleSceneProps> = ({ accentColor, style }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1C1C1A",
        backgroundImage: "linear-gradient(180deg, #1C1C1A 0%, #2A2A28 100%)",
        color: "#F5F3EE",
        fontFamily: sansFamily,
        ...style,
      }}
    >
      <Interactive.Div
        name="Title block"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transformOrigin: "0% 50%",
          scale: interpolate(frame, [0, durationInFrames], [1, 1.04], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.33, 0, 0.67, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <Interactive.Div
          name="Eyebrow"
          premountFor={fps}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: "0.32em",
            color: accentColor,
            opacity: interpolate(frame, [0.2 * fps, 0.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.2 * fps, 0.9 * fps],
              ["0px 24px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <div
            style={{
              height: 4,
              backgroundColor: accentColor,
              width: interpolate(frame, [0.2 * fps, 1 * fps], [0, 96], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          />
          RESEARCH SERIES
        </Interactive.Div>
        <div style={{ overflow: "hidden", marginTop: 40 }}>
          <Interactive.Div
            name="Headline"
            premountFor={fps}
            style={{
              fontFamily: serifFamily,
              fontSize: 200,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              translate: interpolate(
                frame,
                [0.3 * fps, 1.3 * fps],
                ["0px 240px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              ),
            }}
          >
            Lieflat Charts
          </Interactive.Div>
        </div>
        <div style={{ overflow: "hidden", marginTop: 8 }}>
          <Interactive.Div
            name="Accent line"
            premountFor={fps}
            style={{
              fontFamily: serifFamily,
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "0.06em",
              color: accentColor,
              translate: interpolate(
                frame,
                [0.8 * fps, 1.8 * fps],
                ["0px 170px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              ),
            }}
          >
            深度研究三部曲
          </Interactive.Div>
        </div>
      </Interactive.Div>
      <Interactive.Div
        name="Gold hairline"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          bottom: 150,
          height: 2,
          backgroundImage: `linear-gradient(90deg, ${accentColor} 0%, rgba(212, 160, 23, 0) 100%)`,
          width: interpolate(frame, [0.9 * fps, 2.4 * fps], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />
    </AbsoluteFill>
  );
};

const titleSceneSchema = {
  accentColor: {
    type: "color",
    default: "#D4A017",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const TitleScene = Interactive.withSchema({
  Component: TitleSceneInner,
  componentName: "<TitleScene>",
  schema: titleSceneSchema,
  wrapInSequence: true,
});
