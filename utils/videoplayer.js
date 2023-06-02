import React, { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-theta-plugin";

const VideoPlayer = ({ source, video_id, user_id }) => {
  useEffect(() => {
    const player = videojs("my-player", {
      autoplay: true,
      muted: false,
      techOrder: ["theta_hlsjs", "html5"],
      sources: [
        {
          src: source,
          type: "application/vnd.apple.mpegurl",
          label: "1080p",
        },
      ],
      plugins: {
        theta_hlsjs: {
          videoId: video_id,
          userId: user_id,
        },
      },
    });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div>
      <video
        id="video-player"
        className="video-js vjs-default-skin"
        controls
      ></video>
    </div>
  );
};

export default VideoPlayer;
