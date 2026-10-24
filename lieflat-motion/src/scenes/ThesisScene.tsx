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

type ThesisSceneProps = {
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const ThesisSceneInner: React.FC<ThesisSceneProps> = ({
  accentColor,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
        name="Thesis copy"
        premountFor={fps}
        style={{ position: "absolute", left: 160, right: 160, top: 150 }}
      >
        <Interactive.Div
          name="Negation"
          premountFor={fps}
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: 48,
            fontWeight: 500,
            lineHeight: 1.4,
            color: "#4A3728",
            opacity: interpolate(frame, [0.3 * fps, 0.9 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          不是传统的图表库
          <div
            style={{
              position: "absolute",
              left: -6,
              top: "54%",
              height: 5,
              backgroundColor: accentColor,
              width: interpolate(
                frame,
                [0.9 * fps, 1.4 * fps],
                ["0%", "104%"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.65, 0, 0.35, 1),
                },
              ),
            }}
          />
        </Interactive.Div>
        <div style={{ overflow: "hidden", marginTop: 24 }}>
          <Interactive.Div
            name="Thesis headline"
            premountFor={fps}
            style={{
              fontFamily: serifFamily,
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.3,
              translate: interpolate(
                frame,
                [0.8 * fps, 1.7 * fps],
                ["0px 150px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              ),
            }}
          >
            给 AI Agent 读的
            <span style={{ position: "relative", display: "inline-block" }}>
              <span
                style={{
                  position: "absolute",
                  left: -4,
                  bottom: 14,
                  height: 26,
                  backgroundColor: accentColor,
                  opacity: 0.55,
                  width: interpolate(
                    frame,
                    [1.6 * fps, 2.2 * fps],
                    ["0%", "104%"],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.bezier(0.65, 0, 0.35, 1),
                    },
                  ),
                }}
              />
              <span style={{ position: "relative" }}>设计法典</span>
            </span>
          </Interactive.Div>
        </div>
        <Interactive.Div
          name="Thesis support"
          premountFor={fps}
          style={{
            marginTop: 24,
            fontSize: 44,
            fontWeight: 500,
            lineHeight: 1.4,
            color: "#4A3728",
            opacity: interpolate(frame, [1.4 * fps, 2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [1.4 * fps, 2 * fps],
              ["0px 20px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          把品味、规则与工作方法，编码成 Agent Skill
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Stat rule"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          bottom: 430,
          height: 2,
          backgroundColor: "#1C1C1A",
          width: interpolate(frame, [1.5 * fps, 2.3 * fps], [0, 1600], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Stat locks"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          right: 160,
          bottom: 130,
          height: 260,
          display: "flex",
        }}
      >
        <Interactive.Div
          name="Stat stars"
          premountFor={fps}
          style={{
            flex: 1,
            opacity: interpolate(frame, [1.7 * fps, 2.2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [1.7 * fps, 2.2 * fps],
              ["0px 40px", "0px 0px"],
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
              fontSize: 150,
              fontWeight: 700,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {interpolate(frame, [1.7 * fps, 2.6 * fps], [0, 5.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }).toFixed(1)}
            k
          </div>
          <div
            style={{
              marginTop: 22,
              height: 6,
              backgroundColor: accentColor,
              width: interpolate(frame, [2.5 * fps, 2.8 * fps], [0, 88], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          />
          <div
            style={{
              marginTop: 22,
              fontSize: 44,
              fontWeight: 500,
              color: "#4A3728",
            }}
          >
            GitHub Stars
          </div>
        </Interactive.Div>
        <Interactive.Div
          name="Stat chart types"
          premountFor={fps}
          style={{
            flex: 1,
            paddingLeft: 64,
            borderLeft: "1px solid rgba(28, 28, 26, 0.2)",
            opacity: interpolate(frame, [1.95 * fps, 2.45 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [1.95 * fps, 2.45 * fps],
              ["0px 40px", "0px 0px"],
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
              fontSize: 150,
              fontWeight: 700,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {interpolate(frame, [1.95 * fps, 2.85 * fps], [0, 63], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }).toFixed(0)}
          </div>
          <div
            style={{
              marginTop: 22,
              height: 6,
              backgroundColor: accentColor,
              width: interpolate(frame, [2.75 * fps, 3.05 * fps], [0, 88], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          />
          <div
            style={{
              marginTop: 22,
              fontSize: 44,
              fontWeight: 500,
              color: "#4A3728",
            }}
          >
            图型
          </div>
        </Interactive.Div>
        <Interactive.Div
          name="Stat templates"
          premountFor={fps}
          style={{
            flex: 1,
            paddingLeft: 64,
            borderLeft: "1px solid rgba(28, 28, 26, 0.2)",
            opacity: interpolate(frame, [2.2 * fps, 2.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [2.2 * fps, 2.7 * fps],
              ["0px 40px", "0px 0px"],
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
              fontSize: 150,
              fontWeight: 700,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {interpolate(frame, [2.2 * fps, 3.1 * fps], [0, 12], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }).toFixed(0)}
          </div>
          <div
            style={{
              marginTop: 22,
              height: 6,
              backgroundColor: accentColor,
              width: interpolate(frame, [3 * fps, 3.3 * fps], [0, 88], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          />
          <div
            style={{
              marginTop: 22,
              fontSize: 44,
              fontWeight: 500,
              color: "#4A3728",
            }}
          >
            套模板
          </div>
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const thesisSceneSchema = {
  accentColor: {
    type: "color",
    default: "#D4A017",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const ThesisScene = Interactive.withSchema({
  Component: ThesisSceneInner,
  componentName: "<ThesisScene>",
  schema: thesisSceneSchema,
  wrapInSequence: true,
});
