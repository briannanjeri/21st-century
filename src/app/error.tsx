"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h2>An error occurred:{error.message}</h2>
      <button onClick={() => reset()}>Sci-FI</button>
    </div>
  );
};

export default Error;
