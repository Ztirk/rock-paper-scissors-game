import React, { useEffect, useState } from "react";
import bgPentagon from "../assets/images/bg-pentagon.svg";
import Icon from "./Icon";
import { PickIcon } from "../assets/interfaces/interfaces";
import IconFrame from "./IconFrame";
import Cookies from "js-cookie";

interface Props {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function Game({ setScore }: Props) {
  const [pickIcon, setPickIcon] = useState<PickIcon["type"]>("");
  const [oppoPick, setOppoPick] = useState<PickIcon["type"]>("");
  const [winner, setWinner] = useState<"win" | "draw" | "lose" | "">("");

  const iconSets: PickIcon["type"][] = [
    "lizard",
    "paper",
    "rock",
    "scissors",
    "spock",
  ];

  useEffect(() => {
    if (pickIcon && oppoPick)
      if (
        (pickIcon == "lizard" &&
          (oppoPick == "spock" || oppoPick == "paper")) ||
        (pickIcon == "spock" &&
          (oppoPick == "scissors" || oppoPick == "rock")) ||
        (pickIcon == "scissors" &&
          (oppoPick == "paper" || oppoPick == "lizard")) ||
        (pickIcon == "paper" && (oppoPick == "rock" || oppoPick == "spock")) ||
        (pickIcon == "rock" && (oppoPick == "lizard" || oppoPick == "scissors"))
      ) {
        setTimeout(() => {
          setScore((prev) => prev + 1);
          setWinner("win");
        }, 1000);
      } else if (pickIcon == oppoPick) {
        setTimeout(() => {
          setWinner("draw");
        }, 1000);
      } else {
        setTimeout(() => {
          setScore((prev) => prev - 1);
          setWinner("lose");
        }, 1000);
      }
  }, [oppoPick, pickIcon]);

  const handleClickIcon: (e: React.MouseEvent<HTMLDivElement>) => void = (
    e
  ) => {
    const iconType = e.currentTarget.getAttribute(
      "data-type"
    ) as PickIcon["type"];
    setPickIcon(iconType);

    setTimeout(() => {
      setOppoPick(iconSets[Math.floor(Math.random() * 4)]);
    }, 1000);
  };

  const handlePlayAgain = () => {
    setPickIcon("");
    setOppoPick("");
    setWinner("");
  };

  return (
    <div
      className={`transition-all duration-1000 ${
        pickIcon
          ? `flex justify-center items-center gap-10 
            `
          : `h-[313px] w-[329px] relative`
      }`}
    >
      <img
        className={`absolute ${pickIcon ? `hidden` : ` `}`}
        src={bgPentagon}
      />
      <IconFrame pickIcon={pickIcon}>
        <h1
          className={`${
            pickIcon ? `text-white text-3xl tracking-widest` : `hidden`
          }`}
        >
          YOU PICKED
        </h1>
        <Icon type="lizard" pickIcon={pickIcon} onClick={handleClickIcon} />
        <Icon type="paper" pickIcon={pickIcon} onClick={handleClickIcon} />
        <Icon type="rock" pickIcon={pickIcon} onClick={handleClickIcon} />
        <Icon type="scissors" pickIcon={pickIcon} onClick={handleClickIcon} />
        <Icon type="spock" pickIcon={pickIcon} onClick={handleClickIcon} />
        <Icon type={pickIcon} battle />
      </IconFrame>

      <div
        className={`text-white text-center 
                        flex flex-col gap-5 ${winner ? "" : "hidden"}`}
      >
        <h1 className={`text-6xl font-bold`}>
          {winner == "win"
            ? "YOU WIN"
            : winner == "draw"
            ? "DRAW"
            : winner == "lose"
            ? "YOU LOSE"
            : ""}
        </h1>
        <button
          className={`w-full py-2
                          text-2xl text-header tracking-widest 
                          bg-white rounded-lg `}
          onClick={handlePlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>

      <IconFrame pickIcon={pickIcon}>
        <h1
          className={`${
            pickIcon ? `text-white text-3xl tracking-widest` : `hidden`
          }`}
        >
          THE HOUSE PICKED
        </h1>
        <Icon type={oppoPick} battle />
      </IconFrame>
    </div>
  );
}
