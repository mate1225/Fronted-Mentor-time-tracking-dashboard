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
  const WorkData = WORK[selectedInterval];
  const playData = PLAY[selectedInterval];
  const studyData = STUDY[selectedInterval];
  const exerciseData = EXERCISE[selectedInterval];
  const socialData = SOCIAL[selectedInterval];
  const selfCareData = SELF_CARE[selectedInterval];

  function WorkCard() {
    return (
      <CardWrapper>
        <CardImage image={workImage} bgColor="bg-Light_red_work" />
        <CardBody
          title="Work"
          interval={getIntervalName(selectedInterval)}
          currentTime={WorkData.current}
          previousTime={WorkData.previous}
        />
      </CardWrapper>
    );
  }
  function PlayCard() {
    return (
      <CardWrapper>
        <CardImage image={playImage} bgColor="bg-Soft_blue__play" />
        <CardBody
          title="Play"
          currentTime={playData.current}
          interval={getIntervalName(selectedInterval)}
          previousTime={playData.previous}
        />
      </CardWrapper>
    );
  }
  function StudyCard() {
    return (
      <CardWrapper>
        <CardImage image={StudyImage} bgColor="bg-Light_red__study" />
        <CardBody
          title="Study"
          currentTime={studyData.current}
          interval={getIntervalName(selectedInterval)}
          previousTime={studyData.previous}
        />
      </CardWrapper>
    );
  }
  function ExerciseCard() {
    return (
      <CardWrapper>
        <CardImage image={ExerciseImage} bgColor="bg-Lime_green__exercise" />
        <CardBody
          title="Exercise"
          currentTime={exerciseData.current}
          interval={getIntervalName(selectedInterval)}
          previousTime={exerciseData.previous}
        />
      </CardWrapper>
    );
  }
  function SocialCard() {
    return (
      <CardWrapper>
        <CardImage image={SocialImage} bgColor="bg-Violet__social" />
        <CardBody
          title="Social"
          currentTime={socialData.current}
          interval={getIntervalName(selectedInterval)}
          previousTime={socialData.previous}
        />
      </CardWrapper>
    );
  }
  function SelfCareCard() {
    return (
      <CardWrapper>
        <CardImage image={SelfCareImage} bgColor="bg-Soft_orange__self_care" />
        <CardBody
          title="Self Care"
          currentTime={selfCareData.current}
          interval={getIntervalName(selectedInterval)}
          previousTime={selfCareData.previous}
        />
      </CardWrapper>
    );
  }
  return (
    <article className="mb-[5.063rem] md:mb-0 xl:flex xl:h-screen xl:items-center xl:justify-center">
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
          className="md:grid md:grid-cols-2 md:grid-rows-4 md:items-center 
        md:gap-[1.87rem] xl:grid-cols-3 xl:grid-rows-2 "
        >
          <WorkCard />
          <PlayCard />
          <StudyCard />
          <ExerciseCard />
          <SocialCard />
          <SelfCareCard />
        </div>
      </main>
    </article>
  );
}

export default App;
