import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CardWrapper from "./components/CardWrapper";
import CardImage from "./components/CardImage";
import workImage from "./assets/images/icon-work.svg";
import CardBody from "./components/CardBody";

import data from "./assets/data.json";

const WORK_DATA = data[0].timeframes;

function getIntervalName(selectedInterval) {
  if (selectedInterval === "daily") return "day";
  if (selectedInterval === "weekly") return "week";
  if (selectedInterval === "monthly") return "month";
}

export default function NewApp() {
  const [selectedInterval, setSelectedInterval] = useState("daily");

  // WORK_DATA.daily
  // WORK_DATA['daily']

  const selectedData = WORK_DATA[selectedInterval];

  return (
    <div>
      <Sidebar
        active={selectedInterval}
        onDailyButtonClick={() => setSelectedInterval("daily")}
        onWeeklyButtonClick={() => setSelectedInterval("weekly")}
        onMonthlyButtonClick={() => setSelectedInterval("monthly")}
      />
      <CardWrapper>
        <CardImage image={workImage} />
        <CardBody
          title="Work"
          interval={getIntervalName(selectedInterval)}
          currentTime={selectedData.current}
          time={selectedData.previous}
        />
      </CardWrapper>
    </div>
  );
}
