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

type VolumeTwoSceneProps = {
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const VolumeTwoSceneInner: React.FC<VolumeTwoSceneProps> = ({
  accentColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1C1C1A",
        color: "#F5F3EE",
        fontFamily: sansFamily,
        ...style,
      }}
    >
      <Interactive.Div
        name="Ghost numeral"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 130,
          bottom: 40,
          fontFamily: serifFamily,
          fontSize: 420,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#F5F3EE",
          opacity: 0.05,
          translate: interpolate(
            frame,
            [0, durationInFrames],
            ["-40px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.33, 0, 0.67, 1),
            },
          ),
        }}
      >
        02
      </Interactive.Div>

      <Interactive.Div
        name="Volume header"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 188,
          width: 580,
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
            letterSpacing: "0.12em",
            color: accentColor,
          }}
        >
          VOL. 02
        </div>
        <div
          style={{
            marginTop: 4,
            fontSize: 44,
            fontWeight: 500,
            color: "rgba(245, 243, 238, 0.7)",
          }}
        >
          生产者视角
        </div>
        <div
          style={{
            marginTop: 36,
            fontFamily: serifFamily,
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          五层生产体系
        </div>
        <div
          style={{
            marginTop: 20,
            width: 96,
            height: 4,
            backgroundColor: accentColor,
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Volume support"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 560,
          width: 580,
          fontSize: 44,
          fontWeight: 500,
          lineHeight: 1.5,
          color: "rgba(245, 243, 238, 0.7)",
          opacity: interpolate(frame, [0.8 * fps, 1.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        从视觉 token
        <br />
        到 AI 工作流
      </Interactive.Div>

      <Interactive.Div
        name="Layer 5"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 800,
          top: 188,
          width: 960,
          height: 124,
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "0 40px",
          boxSizing: "border-box",
          backgroundColor: "rgba(245, 243, 238, 0.07)",
          borderLeft: `6px solid ${accentColor}`,
          opacity: interpolate(frame, [2.3 * fps, 2.9 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [2.3 * fps, 2.9 * fps],
            ["0px 60px", "0px 0px"],
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
            width: 56,
            fontFamily: serifFamily,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          5
        </div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>SKILL.md</div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 44,
            fontWeight: 500,
            color: "rgba(245, 243, 238, 0.65)",
          }}
        >
          AI 工作流
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Layer 4"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 800,
          top: 328,
          width: 960,
          height: 124,
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "0 40px",
          boxSizing: "border-box",
          backgroundColor: "rgba(245, 243, 238, 0.07)",
          borderLeft: `6px solid ${accentColor}`,
          opacity: interpolate(frame, [1.95 * fps, 2.55 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.95 * fps, 2.55 * fps],
            ["0px 60px", "0px 0px"],
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
            width: 56,
            fontFamily: serifFamily,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          4
        </div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>catalog.md</div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 44,
            fontWeight: 500,
            color: "rgba(245, 243, 238, 0.65)",
          }}
        >
          图型目录
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Layer 3"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 800,
          top: 468,
          width: 960,
          height: 124,
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "0 40px",
          boxSizing: "border-box",
          backgroundColor: "rgba(245, 243, 238, 0.07)",
          borderLeft: `6px solid ${accentColor}`,
          opacity: interpolate(frame, [1.6 * fps, 2.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.6 * fps, 2.2 * fps],
            ["0px 60px", "0px 0px"],
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
            width: 56,
            fontFamily: serifFamily,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          3
        </div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>gallery 模板</div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 44,
            fontWeight: 500,
            color: "rgba(245, 243, 238, 0.65)",
          }}
        >
          63 张真实实现
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Layer 2"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 800,
          top: 608,
          width: 960,
          height: 124,
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "0 40px",
          boxSizing: "border-box",
          backgroundColor: "rgba(245, 243, 238, 0.07)",
          borderLeft: `6px solid ${accentColor}`,
          opacity: interpolate(frame, [1.25 * fps, 1.85 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.25 * fps, 1.85 * fps],
            ["0px 60px", "0px 0px"],
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
            width: 56,
            fontFamily: serifFamily,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          2
        </div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>color-presets.js</div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 44,
            fontWeight: 500,
            color: "rgba(245, 243, 238, 0.65)",
          }}
        >
          三套彩色预设
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Layer 1"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 800,
          top: 748,
          width: 960,
          height: 124,
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "0 40px",
          boxSizing: "border-box",
          backgroundColor: "rgba(212, 160, 23, 0.16)",
          borderLeft: `6px solid ${accentColor}`,
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
        <div
          style={{
            width: 56,
            fontFamily: serifFamily,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            color: accentColor,
          }}
        >
          1
        </div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>mono-tokens.js</div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: 44,
            fontWeight: 700,
            color: accentColor,
          }}
        >
          唯一正本
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const volumeTwoSceneSchema = {
  accentColor: {
    type: "color",
    default: "#D4A017",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const VolumeTwoScene = Interactive.withSchema({
  Component: VolumeTwoSceneInner,
  componentName: "<VolumeTwoScene>",
  schema: volumeTwoSceneSchema,
  wrapInSequence: true,
});
