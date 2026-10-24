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

type CloseSceneProps = {
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const CloseSceneInner: React.FC<CloseSceneProps> = ({ accentColor, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1C1C1A",
        backgroundImage: "linear-gradient(180deg, #2A2A28 0%, #1C1C1A 100%)",
        color: "#F5F3EE",
        fontFamily: sansFamily,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <Interactive.Div
        name="Close eyebrow"
        premountFor={fps}
        style={{
          fontSize: 44,
          fontWeight: 700,
          letterSpacing: "0.3em",
          paddingLeft: "0.3em",
          color: accentColor,
          opacity: interpolate(frame, [0.3 * fps, 0.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        三个视角
      </Interactive.Div>

      <Interactive.Div
        name="Viewpoints"
        premountFor={fps}
        style={{
          marginTop: 56,
          display: "flex",
          alignItems: "flex-end",
          gap: 64,
        }}
      >
        <Interactive.Div
          name="Viewpoint user"
          premountFor={fps}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: interpolate(frame, [0.5 * fps, 1.1 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.5 * fps, 1.1 * fps],
              ["0px 60px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: accentColor }}>
            01
          </div>
          <div
            style={{
              marginTop: 12,
              fontFamily: serifFamily,
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            使用者
          </div>
        </Interactive.Div>
        <Interactive.Div
          name="Separator 1"
          premountFor={fps}
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            marginBottom: 66,
            backgroundColor: accentColor,
            scale: interpolate(frame, [0.9 * fps, 1.3 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        />
        <Interactive.Div
          name="Viewpoint producer"
          premountFor={fps}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: interpolate(frame, [0.9 * fps, 1.5 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.9 * fps, 1.5 * fps],
              ["0px 60px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: accentColor }}>
            02
          </div>
          <div
            style={{
              marginTop: 12,
              fontFamily: serifFamily,
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            生产者
          </div>
        </Interactive.Div>
        <Interactive.Div
          name="Separator 2"
          premountFor={fps}
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            marginBottom: 66,
            backgroundColor: accentColor,
            scale: interpolate(frame, [1.3 * fps, 1.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200 }),
              output: "perceptual-scale",
            }),
          }}
        />
        <Interactive.Div
          name="Viewpoint creator"
          premountFor={fps}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: interpolate(frame, [1.3 * fps, 1.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [1.3 * fps, 1.9 * fps],
              ["0px 60px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: accentColor }}>
            03
          </div>
          <div
            style={{
              marginTop: 12,
              fontFamily: serifFamily,
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            创造者
          </div>
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Close rule"
        premountFor={fps}
        style={{
          marginTop: 64,
          height: 2,
          backgroundImage: `linear-gradient(90deg, rgba(212, 160, 23, 0) 0%, ${accentColor} 50%, rgba(212, 160, 23, 0) 100%)`,
          width: interpolate(frame, [1.8 * fps, 2.6 * fps], [0, 1200], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Close line"
        premountFor={fps}
        style={{
          marginTop: 56,
          display: "flex",
          fontSize: 48,
          fontWeight: 500,
          color: "rgba(245, 243, 238, 0.85)",
        }}
      >
        <Interactive.Span
          name="Independent"
          premountFor={fps}
          style={{
            opacity: interpolate(frame, [2.1 * fps, 2.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          三册独立成篇，
        </Interactive.Span>
        <Interactive.Span
          name="Sequential"
          premountFor={fps}
          style={{
            opacity: interpolate(frame, [2.6 * fps, 3.2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          但按顺序阅读能获得最完整的理解
        </Interactive.Span>
      </Interactive.Div>

      <Interactive.Div
        name="Sign-off"
        premountFor={fps}
        style={{
          position: "absolute",
          bottom: 120,
          fontFamily: serifFamily,
          fontSize: 44,
          fontWeight: 500,
          letterSpacing: "0.08em",
          color: "rgba(245, 243, 238, 0.55)",
          opacity: interpolate(frame, [3.1 * fps, 3.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Lieflat Charts 深度研究三部曲
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const closeSceneSchema = {
  accentColor: {
    type: "color",
    default: "#D4A017",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const CloseScene = Interactive.withSchema({
  Component: CloseSceneInner,
  componentName: "<CloseScene>",
  schema: closeSceneSchema,
  wrapInSequence: true,
});
