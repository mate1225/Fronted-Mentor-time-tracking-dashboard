import React, { useState } from "react";
import "./App.css";
//images
import workImage from "./assets/images/icon-work.svg";
import playImage from "./assets/images/icon-play.svg";
import StudyImage from "./assets/images/icon-study.svg";
import ExerciseImage from "./assets/images/icon-exercise.svg";
import SocialImage from "./assets/images/icon-social.svg";
import SelfCareImage from "./assets/images/icon-self-care.svg";
//jsx components
import CardBody from "./components/CardBody";
import CardImage from "./components/CardImage";
import CardWrapper from "./components/CardWrapper";
import Sidebar from "./components/Sidebar";
//json data
import data from "./assets/data.json";
//data selectors
const WORK = data[0].timeframes;
const PLAY = data[1].timeframes;
const STUDY = data[2].timeframes;
const EXERCISE = data[3].timeframes;
const SOCIAL = data[4].timeframes;
const SELF_CARE = data[5].timeframes;

function getIntervalName(selectedInterval) {
  if (selectedInterval === "daily") return "day";
  if (selectedInterval === "weekly") return "week";
  if (selectedInterval === "monthly") return "month";
}

function App() {
  const [selectedInterval, setSelectedInterval] = useState("weekly");
  const cardData = [
    {
      title: "Work",
      data: WORK,
      image: workImage,
      bgColor: "bg-Light_red_work",
    },
    {
      title: "Play",
      data: PLAY,
      image: playImage,
      bgColor: "bg-Soft_blue__play",
    },
    {
      title: "Study",
      data: STUDY,
      image: StudyImage,
      bgColor: "bg-Light_red__study",
    },
    {
      title: "Exercise",
      data: EXERCISE,
      image: ExerciseImage,
      bgColor: "bg-Lime_green__exercise",
    },
    {
      title: "Social",
      data: SOCIAL,
      image: SocialImage,
      bgColor: "bg-Violet__social",
    },
    {
      title: "Self Care",
      data: SELF_CARE,
      image: SelfCareImage,
      bgColor: "bg-Soft_orange__self_care",
    },
  ];
  function Footer() {
    return (
      <div className="mb-[5.6rem] mt-10 flex flex-wrap items-center justify-center gap-3   xl:mt-[5rem]">
        <div className="flex gap-1">
          <p className=" text-Desaturated_blue">Challenge by:</p>
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-Pale_Blue hover:text-white "
          >
            Frontend Mentor
          </a>
        </div>
        <div className="flex gap-1">
          <p className=" text-Desaturated_blue">Coded by:</p>
          <a
            href="https://github.com/mate1225"
            target="_blank"
            className="text-Pale_Blue hover:text-white"
          >
            Mészáros Máté
          </a>
        </div>
      </div>
    );
  }
  return (
    <article className=" xl:flex xl:h-screen xl:flex-col xl:items-center xl:justify-center">
      <main
        className="ml-6 mr-6 md:flex md:flex-col md:gap-5 xl:max-w-[90rem]
        xl:flex-row xl:items-center xl:justify-center"
      >
        <Sidebar
          active={selectedInterval}
          onDailyButtonClick={() => setSelectedInterval("daily")}
          onWeeklyButtonClick={() => setSelectedInterval("weekly")}
          onMonthlyButtonClick={() => setSelectedInterval("monthly")}
        />
        <div
          className="md:grid md:grid-cols-2 md:grid-rows-3 md:items-center 
           md:gap-[1.87rem] xl:grid-cols-3 xl:grid-rows-2 "
        >
          {cardData.map(({ title, data, bgColor, image }) => (
            <CardWrapper>
              <CardImage image={image} bgColor={bgColor} />
              <CardBody
                title={title}
                currentTime={data[selectedInterval].current}
                interval={getIntervalName(selectedInterval)}
                previousTime={data[selectedInterval].previous}
              />
            </CardWrapper>
          ))}
        </div>
      </main>
      <div className="ml-3 mr-3 flex items-center justify-center ">
        <Footer />
      </div>
    </article>
  );
}

export default App;