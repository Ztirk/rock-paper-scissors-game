import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface Props {
  score: number;
}

export default function ScoreBoard({ score }: Props) {
  return (
    <div className="flex gap-80 border-4 border-dark px-10 py-4 rounded-lg ">
      <div className="text-white leading-7 text-4xl">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
        <h1>LIZARD</h1>
        <h1>SPOKE</h1>
      </div>
      <div className="bg-white w-48 flex flex-col justify-center items-center rounded-lg shadow-lg tracking-widest">
        <h2 className="text-score text-2xl ">SCORE</h2>
        <h2 className="text-header text-7xl font-bold">{score}</h2>
      </div>
    </div>
  );
}
