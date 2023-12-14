"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";

type TYouTubePlayerProps = {
  url: any;
};

const YoutubePlayer: React.FC<TYouTubePlayerProps> = ({ url }) => {
  return <ReactPlayer width="100%" height="100%" controls={true} url={url} />;
};

export default YoutubePlayer;
