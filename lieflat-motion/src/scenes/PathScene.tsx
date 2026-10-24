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

type PathSceneProps = {
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const PathSceneInner: React.FC<PathSceneProps> = ({ accentColor, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#EBE7DF",
        color: "#1C1C1A",
        fontFamily: sansFamily,
        ...style,
      }}
    >
      <Interactive.Div
        name="Path header"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 140,
          opacity: interpolate(frame, [0.3 * fps, 0.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.3 * fps, 0.9 * fps],
            ["0px 30px", "0px 0px"],
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
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: "0.3em",
            color: "#4A3728",
          }}
        >
          READING PATH
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily: serifFamily,
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          推荐阅读路径
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Track base"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 559,
          height: 2,
          backgroundColor: "rgba(74, 55, 40, 0.25)",
          width: interpolate(frame, [0.2 * fps, 1 * fps], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Track progress"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 557,
          height: 6,
          backgroundColor: accentColor,
          width: interpolate(
            frame,
            [0.6 * fps, 1.3 * fps, 1.5 * fps, 2.2 * fps],
            [0, 560, 560, 1120],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [
                Easing.bezier(0.65, 0, 0.35, 1),
                Easing.linear,
                Easing.bezier(0.65, 0, 0.35, 1),
              ],
            },
          ),
        }}
      />

      <Interactive.Div
        name="Node 01"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 146,
          top: 546,
          width: 28,
          height: 28,
          borderRadius: 14,
          backgroundColor: accentColor,
          scale: interpolate(frame, [0.4 * fps, 0.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Node 02"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 706,
          top: 546,
          width: 28,
          height: 28,
          borderRadius: 14,
          backgroundColor: accentColor,
          scale: interpolate(frame, [1.2 * fps, 1.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Node 03"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 1266,
          top: 546,
          width: 28,
          height: 28,
          borderRadius: 14,
          backgroundColor: accentColor,
          scale: interpolate(frame, [2.1 * fps, 2.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
        }}
      />

      <Interactive.Div
        name="Step 01"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 620,
          width: 480,
          opacity: interpolate(frame, [0.5 * fps, 1.1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.5 * fps, 1.1 * fps],
            ["0px 50px", "0px 0px"],
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
            fontFamily: serifFamily,
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          01
        </div>
        <div
          style={{
            marginTop: 28,
            fontFamily: serifFamily,
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          图表全景
        </div>
      </Interactive.Div>
      <Interactive.Div
        name="Step 02"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 720,
          top: 620,
          width: 480,
          opacity: interpolate(frame, [1.3 * fps, 1.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.3 * fps, 1.9 * fps],
            ["0px 50px", "0px 0px"],
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
            fontFamily: serifFamily,
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          02
        </div>
        <div
          style={{
            marginTop: 28,
            fontFamily: serifFamily,
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          生产方法
        </div>
      </Interactive.Div>
      <Interactive.Div
        name="Step 03"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 1280,
          top: 620,
          width: 480,
          opacity: interpolate(frame, [2.2 * fps, 2.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [2.2 * fps, 2.8 * fps],
            ["0px 50px", "0px 0px"],
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
            fontFamily: serifFamily,
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          03
        </div>
        <div
          style={{
            marginTop: 28,
            fontFamily: serifFamily,
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          从 0 到 1
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const pathSceneSchema = {
  accentColor: {
    type: "color",
    default: "#D4A017",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const PathScene = Interactive.withSchema({
  Component: PathSceneInner,
  componentName: "<PathScene>",
  schema: pathSceneSchema,
  wrapInSequence: true,
});
