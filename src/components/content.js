import React from "react";
import video from "../content/video.mp4";
import mask from "../content/mask.jpg";

const Content = (dayNight) => {
  console.log(dayNight.eventAction);
  return (
    <>
      <section className={dayNight.eventAction ? "main active" : "main "}>
        <video className="video" autoPlay loop muted type="mp4">
          <source src={video} type="video/mp4"></source>
        </video>
        <img src={mask} className="mask" alt="mak"></img>
        <h2 className="h2">ReactTree</h2>
      </section>
    </>
  );
};

export default Content;
