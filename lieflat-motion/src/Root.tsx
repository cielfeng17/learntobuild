import type React from "react";
import { Composition, Folder } from "remotion";
import { LieflatTrilogy } from "./LieflatTrilogy";
import { CloseScene } from "./scenes/CloseScene";
import { PathScene } from "./scenes/PathScene";
import { ThesisScene } from "./scenes/ThesisScene";
import { TitleScene } from "./scenes/TitleScene";
import { VolumeOneScene } from "./scenes/VolumeOneScene";
import { VolumeThreeScene } from "./scenes/VolumeThreeScene";
import { VolumeTwoScene } from "./scenes/VolumeTwoScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Scenes">
        <Composition
          id="Scene1-Title"
          component={TitleScene}
          durationInFrames={120}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ accentColor: "#D4A017" }}
        />
        <Composition
          id="Scene2-Thesis"
          component={ThesisScene}
          durationInFrames={135}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ accentColor: "#D4A017" }}
        />
        <Composition
          id="Scene3-ReadingPath"
          component={PathScene}
          durationInFrames={135}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ accentColor: "#D4A017" }}
        />
        <Composition
          id="Scene4-Volume01"
          component={VolumeOneScene}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ accentColor: "#D4A017" }}
        />
        <Composition
          id="Scene5-Volume02"
          component={VolumeTwoScene}
          durationInFrames={165}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ accentColor: "#D4A017" }}
        />
        <Composition
          id="Scene6-Volume03"
          component={VolumeThreeScene}
          durationInFrames={135}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ accentColor: "#D4A017" }}
        />
        <Composition
          id="Scene7-Close"
          component={CloseScene}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ accentColor: "#D4A017" }}
        />
      </Folder>
      <Composition
        id="LieflatTrilogy"
        component={LieflatTrilogy}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
