import type React from "react";
import {
  AbsoluteFill,
  CanvasImage,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import { sansFamily, serifFamily } from "../fonts";

type VolumeOneSceneProps = {
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const VolumeOneSceneInner: React.FC<VolumeOneSceneProps> = ({
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
          top: 20,
          fontFamily: serifFamily,
          fontSize: 340,
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
        01
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
          VOL. 01 · 使用者视角
        </div>
        <div
          style={{
            marginTop: 12,
            fontFamily: serifFamily,
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          图表全景与场景选型
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Card Lupi"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          top: 350,
          width: 500,
          backgroundColor: "#FFFFFF",
          border: "1px solid #D9D4C8",
          opacity: interpolate(frame, [0.8 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.8 * fps, 1.5 * fps],
            ["0px 80px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <div style={{ width: 498, height: 286, overflow: "hidden" }}>
          <CanvasImage
            name="Lupi preview"
            src={staticFile("preview-lupi-01.png")}
            premountFor={fps}
            width={996}
            height={572}
            fit="cover"
            style={{
              width: 498,
              height: 286,
              scale: interpolate(frame, [0.8 * fps, 2.8 * fps], [1.12, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                output: "perceptual-scale",
              }),
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "28px 36px 30px",
            borderTop: "1px solid #D9D4C8",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: serifFamily,
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Lupi
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 44,
                fontWeight: 500,
                color: "#4A3728",
              }}
            >
              编辑叙事型
            </div>
          </div>
          <div
            style={{
              fontFamily: serifFamily,
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 0.9,
              color: accentColor,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {interpolate(frame, [1 * fps, 2 * fps], [0, 19], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }).toFixed(0)}
          </div>
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Card Glance"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 710,
          top: 350,
          width: 500,
          backgroundColor: "#FFFFFF",
          border: "1px solid #D9D4C8",
          opacity: interpolate(frame, [1.1 * fps, 1.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.1 * fps, 1.8 * fps],
            ["0px 80px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <div style={{ width: 498, height: 286, overflow: "hidden" }}>
          <CanvasImage
            name="Glance preview"
            src={staticFile("preview-glance-03.png")}
            premountFor={fps}
            width={996}
            height={572}
            fit="cover"
            style={{
              width: 498,
              height: 286,
              scale: interpolate(frame, [1.1 * fps, 3.1 * fps], [1.12, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                output: "perceptual-scale",
              }),
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "28px 36px 30px",
            borderTop: "1px solid #D9D4C8",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: serifFamily,
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Glance
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 44,
                fontWeight: 500,
                color: "#4A3728",
              }}
            >
              快速判断型
            </div>
          </div>
          <div
            style={{
              fontFamily: serifFamily,
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 0.9,
              color: accentColor,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {interpolate(frame, [1.3 * fps, 2.3 * fps], [0, 20], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }).toFixed(0)}
          </div>
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Card Basics"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 1260,
          top: 350,
          width: 500,
          backgroundColor: "#FFFFFF",
          border: "1px solid #D9D4C8",
          opacity: interpolate(frame, [1.4 * fps, 2.1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.4 * fps, 2.1 * fps],
            ["0px 80px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <div style={{ width: 498, height: 286, overflow: "hidden" }}>
          <CanvasImage
            name="Basics preview"
            src={staticFile("preview-basics-01.png")}
            premountFor={fps}
            width={996}
            height={572}
            fit="cover"
            style={{
              width: 498,
              height: 286,
              scale: interpolate(frame, [1.4 * fps, 3.4 * fps], [1.12, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
                output: "perceptual-scale",
              }),
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "28px 36px 30px",
            borderTop: "1px solid #D9D4C8",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: serifFamily,
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Basics
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 44,
                fontWeight: 500,
                color: "#4A3728",
              }}
            >
              基础编辑型
            </div>
          </div>
          <div
            style={{
              fontFamily: serifFamily,
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 0.9,
              color: accentColor,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {interpolate(frame, [1.6 * fps, 2.6 * fps], [0, 17], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }).toFixed(0)}
          </div>
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Maps footnote"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 160,
          bottom: 120,
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 44,
          fontWeight: 500,
          color: "#4A3728",
          opacity: interpolate(frame, [2.4 * fps, 3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: accentColor,
          }}
        />
        另有 5 张地图与交互大图
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const volumeOneSceneSchema = {
  accentColor: {
    type: "color",
    default: "#D4A017",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const VolumeOneScene = Interactive.withSchema({
  Component: VolumeOneSceneInner,
  componentName: "<VolumeOneScene>",
  schema: volumeOneSceneSchema,
  wrapInSequence: true,
});
