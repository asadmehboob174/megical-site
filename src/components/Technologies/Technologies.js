import React, { useEffect } from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import Head from "next/head";
import videojs from "video.js";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => {
  useEffect(() => {
    const player = videojs("video-1", {
      controls: true, // Show video controls
      autoplay: false, // Autoplay the video
      sources: [
        {
          src: "/images/video-1.mp4", // Path to your video file in the public folder
          type: "video/mp4", // MIME type of the video file
        },
      ],
    });

    const player2 = videojs("video-2", {
      controls: true, // Show video controls
      autoplay: false, // Autoplay the video
      sources: [
        {
          src: "/images/video-2.mp4", // Path to your video file in the public folder
          type: "video/mp4", // MIME type of the video file
        },
      ],
    });

    const player3 = videojs("video-3", {
      controls: true, // Show video controls
      autoplay: false, // Autoplay the video
      sources: [
        {
          src: "/images/video-3.mp4", // Path to your video file in the public folder
          type: "video/mp4", // MIME type of the video file
        },
      ],
    });

    return () => {
      player.dispose(); // Clean up the video player when the component unmounts
      player2.dispose();
      player3.dispose();
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/video.js/dist/video-js.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/video.js/dist/video.js"></script>
      </Head>
      <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Videos</SectionTitle>
        <List>
          <ListItem>
            <div data-vjs-player>
              <video
                id="video-1"
                className="video-js"
                style={{ width: "100%", height: "268px" }}
              ></video>
            </div>
          </ListItem>
          <ListItem>
            <div data-vjs-player>
              <video
                id="video-2"
                className="video-js"
                style={{ width: "100%", height: "268px" }}
              ></video>
            </div>
          </ListItem>
          <ListItem>
            <div data-vjs-player>
              <video
                id="video-3"
                className="video-js"
                style={{ width: "100%", height: "268px" }}
              ></video>
            </div>
          </ListItem>
        </List>
        <SectionDivider colorAlt />
      </Section>
    </>
  );
};

export default Technologies;
