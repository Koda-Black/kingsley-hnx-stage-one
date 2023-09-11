import React, { useState, useEffect } from "react";
import myImage from "../src/images/HNG_pic.jpeg";

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formattedDateTime =
    currentDateTime.toLocaleDateString("en-US", options) +
    " " +
    currentDateTime.toLocaleTimeString();

  const dayOfWeekRegex = /(\w+),/;
  const match = formattedDateTime.match(dayOfWeekRegex);

  let dayOfWeek = match && match[1] ? match[1] : "Day not found";

  const date = new Date(formattedDateTime);
  const secondsInUTC =
    date.getUTCHours() * 3600 +
    date.getUTCMinutes() * 60 +
    date.getUTCSeconds();

  return (
    <main>
      <h1 data-testid="slackUserName" className="userName">
        Kingsley Kelechi
      </h1>

      <img
        data-testid="slackDisplayImage"
        className="profileImg"
        src={myImage}
        alt="Kingsley Kelechi"
      />

      <div className="day_Time">
        <p data-testid="currentDayOfTheWeek" className="day" id="dayOfWeek">
          {dayOfWeek}
        </p>
        <p data-testid="currentUTCTime" className="time" id="timeInMS">
          {formattedDateTime}
        </p>
        <p className="time" id="utcTime">
          {secondsInUTC} Time in UTC
        </p>
      </div>

      <p data-testid="myTrack" className="track">
        Frontend Track
      </p>
      <a
        data-testid="“githubURL”"
        className="gitHub"
        href="https://github.com/Koda-Black/kingsley-hnx-stage-one"
      >
        Visit GitHub Repo
      </a>
    </main>
  );
}

export default App;
