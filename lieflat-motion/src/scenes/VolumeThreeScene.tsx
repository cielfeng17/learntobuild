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

type VolumeThreeSceneProps = {
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const VolumeThreeSceneInner: React.FC<VolumeThreeSceneProps> = ({
  accentColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F5F3EE",
        color: "#1C1C1A",
        fontFamily: sansFamily,
        ...style,
      }}
    >
      <Interactive.Div
        name="Ghost numeral"
        premountFor={fps}
        style={{
          position: "absolute",
          right: 150,
          top: 30,
          fontFamily: serifFamily,
          fontSize: 300,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#1C1C1A",
          opacity: 0.06,
          translate: interpolate(
            frame,
            [0, durationInFrames],
            ["40px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.33, 0, 0.67, 1),
            },
          ),
        }}
      >
        03
      </Interactive.Div>

      <Interactive.Div
        name="Volume header"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 110,
          opacity: interpolate(frame, [0.3 * fps, 0.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#4A3728",
          }}
        >
          <div style={{ width: 72, height: 4, backgroundColor: accentColor }} />
          VOL. 03 · 创造者视角
        </div>
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          left: 160,
          top: 186,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Volume headline"
          premountFor={fps}
          style={{
            fontFamily: serifFamily,
            fontSize: 150,
            fontWeight: 700,
            lineHeight: 1.15,
            translate: interpolate(
              frame,
              [0.4 * fps, 1.3 * fps],
              ["0px 180px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          从 0 到 1
        </Interactive.Div>
      </div>
      <Interactive.Div
        name="Volume support"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 386,
          fontSize: 44,
          fontWeight: 500,
          color: "#4A3728",
          opacity: interpolate(frame, [0.9 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.9 * fps, 1.5 * fps],
            ["0px 20px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        一个非程序员的 AI 产品路径
      </Interactive.Div>

      <div
        style={{
          position: "absolute",
          left: 160,
          bottom: 140,
          width: 500,
          height: 320,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Layer domain"
          premountFor={fps}
          style={{
            width: 500,
            height: 320,
            boxSizing: "border-box",
            padding: "36px 40px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #D9D4C8",
            borderBottom: "none",
            borderTop: `6px solid ${accentColor}`,
            translate: interpolate(
              frame,
              [1 * fps, 1.7 * fps],
              ["0px 320px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: "#4A3728" }}>
            第一层
          </div>
          <div
            style={{
              marginTop: 4,
              fontFamily: serifFamily,
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            领域
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 44,
              fontWeight: 500,
              color: "#4A3728",
            }}
          >
            最核心，无法速成
          </div>
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 710,
          bottom: 140,
          width: 500,
          height: 450,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Layer design"
          premountFor={fps}
          style={{
            width: 500,
            height: 450,
            boxSizing: "border-box",
            padding: "36px 40px",
            backgroundColor: "#4A3728",
            color: "#F5F3EE",
            borderTop: `6px solid ${accentColor}`,
            translate: interpolate(
              frame,
              [1.4 * fps, 2.1 * fps],
              ["0px 450px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: accentColor }}>
            第二层
          </div>
          <div
            style={{
              marginTop: 4,
              fontFamily: serifFamily,
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            设计
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 44,
              fontWeight: 500,
              color: "rgba(245, 243, 238, 0.75)",
            }}
          >
            可以训练
          </div>
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 1260,
          bottom: 140,
          width: 500,
          height: 580,
          overflow: "hidden",
        }}
      >
        <Interactive.Div
          name="Layer AI"
          premountFor={fps}
          style={{
            width: 500,
            height: 580,
            boxSizing: "border-box",
            padding: "36px 40px",
            backgroundColor: "#1C1C1A",
            color: "#F5F3EE",
            borderTop: `6px solid ${accentColor}`,
            translate: interpolate(
              frame,
              [1.8 * fps, 2.5 * fps],
              ["0px 580px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 700, color: accentColor }}>
            第三层
          </div>
          <div
            style={{
              marginTop: 4,
              fontFamily: serifFamily,
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            AI
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 44,
              fontWeight: 500,
              color: "rgba(245, 243, 238, 0.75)",
            }}
          >
            新时代的核心技能
          </div>
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Baseline"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          bottom: 138,
          height: 2,
          backgroundColor: "#1C1C1A",
          width: interpolate(frame, [0.6 * fps, 1.4 * fps], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />
    </AbsoluteFill>
  );
};

const volumeThreeSceneSchema = {
  accentColor: {
    type: "color",
    default: "#D4A017",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const VolumeThreeScene = Interactive.withSchema({
  Component: VolumeThreeSceneInner,
  componentName: "<VolumeThreeScene>",
  schema: volumeThreeSceneSchema,
  wrapInSequence: true,
});
