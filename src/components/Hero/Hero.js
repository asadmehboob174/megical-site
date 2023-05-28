import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation";

const Hero = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Call the handleResize function on initial render
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Black Magic Expert
        </SectionTitle>
        <SectionText>
          We are Expert in Black Magic. We can bring your Love in your feet
          within 21 Days. We can destroy your enemy and competitors. We will
          also help you to build your business.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        <div>{isMobile && <BgAnimation marginLeft={true} />}</div>
      </LeftSection>
    </Section>
  );
};

export default Hero;
