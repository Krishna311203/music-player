import React from "react";
import ProgressCircle from "./progressCircle";

export default function AudioPlayer({currentTrack}) {
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
        percentage = {75}
        isPlaying = {true}
        image = {currentTrack?.album?.images[0]?.url}
        size = {300}
        color = "#c96850"
        />
      </div>
      <div className="player-right-body"></div>
    </div>
  );
}
