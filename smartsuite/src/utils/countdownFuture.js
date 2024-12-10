// countdownFuture.js

// Convert input time (hours, minutes, seconds) to total seconds
export const convertToSeconds = (hours, minutes, seconds) => {
  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
};

// Format seconds into HH:MM:SS format
export const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
