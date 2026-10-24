import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import type React from "react";
import { useVideoConfig } from "remotion";
import { CloseScene } from "./scenes/CloseScene";
import { PathScene } from "./scenes/PathScene";
import { ThesisScene } from "./scenes/ThesisScene";
import { TitleScene } from "./scenes/TitleScene";
import { VolumeOneScene } from "./scenes/VolumeOneScene";
import { VolumeThreeScene } from "./scenes/VolumeThreeScene";
import { VolumeTwoScene } from "./scenes/VolumeTwoScene";

export const LieflatTrilogy: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence
        name="Title"
        durationInFrames={4 * fps}
        premountFor={fps}
      >
        <TitleScene accentColor="#D4A017" premountFor={fps} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 0.5 * fps })}
      />
      <TransitionSeries.Sequence
        name="Thesis"
        durationInFrames={4.5 * fps}
        premountFor={fps}
      >
        <ThesisScene accentColor="#D4A017" premountFor={fps} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 0.5 * fps })}
      />
      <TransitionSeries.Sequence
        name="Reading path"
        durationInFrames={4.5 * fps}
        premountFor={fps}
      >
        <PathScene accentColor="#D4A017" premountFor={fps} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 0.5 * fps })}
      />
      <TransitionSeries.Sequence
        name="Volume 01"
        durationInFrames={5 * fps}
        premountFor={fps}
      >
        <VolumeOneScene accentColor="#D4A017" premountFor={fps} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 0.5 * fps })}
      />
      <TransitionSeries.Sequence
        name="Volume 02"
        durationInFrames={5.5 * fps}
        premountFor={fps}
      >
        <VolumeTwoScene accentColor="#D4A017" premountFor={fps} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 0.5 * fps })}
      />
      <TransitionSeries.Sequence
        name="Volume 03"
        durationInFrames={4.5 * fps}
        premountFor={fps}
      >
        <VolumeThreeScene accentColor="#D4A017" premountFor={fps} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 0.5 * fps })}
      />
      <TransitionSeries.Sequence
        name="Close"
        durationInFrames={5 * fps}
        premountFor={fps}
      >
        <CloseScene accentColor="#D4A017" premountFor={fps} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
