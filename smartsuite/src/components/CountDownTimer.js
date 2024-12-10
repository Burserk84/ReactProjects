import React, { useState, useRef } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { convertToSeconds, formatTime } from "../utils/countdownFuture";
import "../styles/Global.css"

export const CountDownTimer = () => {
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Start the countdown
  const startCountdown = () => {
    if (isRunning || isPaused) return; // Prevent starting if already running or paused

    const totalSeconds = convertToSeconds(inputHours, inputMinutes, inputSeconds);
    setTimeLeft(totalSeconds);
    setIsRunning(true);
    setIsPaused(false);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(timerRef.current);
        setIsRunning(false);
        return 0;
      });
    }, 1000);
  };

  // Pause the countdown
  const pauseCountdown = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setIsPaused(true);
  };

  // Resume the countdown
  const resumeCountdown = () => {
    setIsRunning(true);
    setIsPaused(false);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(timerRef.current);
        setIsRunning(false);
        return 0;
      });
    }, 1000);
  };

  // Reset the countdown
  const resetCountdown = () => {
    clearInterval(timerRef.current);
    setTimeLeft(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  return (
    <div className="p-3 countdown-container" style={{ textAlign: "center" }}>
      <h3>Countdown Timer</h3>
      {!isRunning && !isPaused && (
        <div>
          <input
            type="number"
            min="0"
            className="form-control mb-2"
            placeholder="Hours"
            value={inputHours}
            onChange={(e) => setInputHours(e.target.value)}
          />
          <input
            type="number"
            min="0"
            className="form-control mb-2"
            placeholder="Minutes"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
          />
          <input
            type="number"
            min="0"
            max="59"
            className="form-control mb-2"
            placeholder="Seconds"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
          />
          <button className="btn btn-primary" onClick={startCountdown}>
            Start
          </button>
        </div>
      )}
      {(isRunning || isPaused) && (
        <div>
          <h2 style={{margin: "1.1em 0 1.1em 0"}}>{formatTime(timeLeft)}</h2>
          {isRunning ? (
            <button className="btn btn-warning" onClick={pauseCountdown}>
              Pause
            </button>
          ) : (
            <button className="btn btn-success" onClick={resumeCountdown}>
              Resume
            </button>
          )}
          <button className="btn btn-danger ml-2" onClick={resetCountdown}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};
