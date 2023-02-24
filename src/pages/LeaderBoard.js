import React, { useLayoutEffect, useRef, useState } from "react";
import LeaderBoard from "../components/LeaderBoard";
import useInnerSize from "../hooks/useInnerSize";
// import SocialLinks from "../components/Home/SocialLinks/SocialLinks";

const LeaderBoardPage = () => {
  const { height } = useInnerSize();
  const ref = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref) {
      setContentHeight(ref?.current?.clientHeight);
    }
  }, []);

  return (
    <div
      className={`bg-black ${height > contentHeight ? "min-h-screen" : ""} `}
    >
      <div ref={ref}>
        <LeaderBoard />
        {/* <SocialLinks /> */}
      </div>
    </div>
  );
};

export default LeaderBoardPage;
