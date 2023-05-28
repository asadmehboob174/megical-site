import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    if (node && node.scrollTo) {
      return node.scrollTo({ left, behavior: "smooth" });
    }
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>What is Kala Jadu.</SectionTitle>
      <SectionText>
        Kala jadu is one of the horrifying, which is enough to ruin a relation
        and people life in a few times. Well, kala jadu, kala jadoo is used for
        both the purpose, good as well as bad, which is depend on the caster
        intention, and their needs. Basically, kala jadu, kala jadoo comes from
        the Bangal; the Bangal is famous in the whole world just because of
        having kala jadu tactic. As known, if someone is affected by a kala
        jadu, kala jadu for love marriage, then on one can help to that one to
        survive their life to ruin. Means this is one of the powerful.
      </SectionText>
      <SectionText>
        If you ever think that something is strived to possess your mind, either
        you are not under control of yourself, it means that someone is
        surrounded you, who want to get control on you and want to possess on
        you with the help of kala jadu, kala jadu online amliyat. To get
        overcome of that situation, you need to consult with kala jadu
        specialist, who is the only one person, who can make your help to get
        overcome of issues and keep away kala jadu, kala jadu for death, kala
        jadu for sas, effect from your life.
      </SectionText>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
