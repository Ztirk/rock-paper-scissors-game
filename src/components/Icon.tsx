import iconLizard from "../assets/images/icon-lizard.svg";
import iconPaper from "../assets/images/icon-paper.svg";
import iconRock from "../assets/images/icon-rock.svg";
import iconSpock from "../assets/images/icon-spock.svg";
import iconScissors from "../assets/images/icon-scissors.svg";
import { PickIcon } from "../assets/interfaces/interfaces";

interface Props {
  type: PickIcon["type"];
  pickIcon?: PickIcon["type"];
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  battle?: true;
}

export default function Icon({ type, pickIcon, onClick, battle }: Props) {
  return (
    <div
      className={`cursor-pointer  ${
        pickIcon
          ? `hidden`
          : `${
              battle
                ? `relative 
                   animate-showUp 
                   w-full aspect-square 
                   flex justify-center items-center
                   `
                : `absolute`
            }`
      } ${
        type == "lizard"
          ? `${battle ? `` : `-bottom-16 left-0`}`
          : type == "paper"
          ? `${battle ? `` : `-right-4 top-20`}`
          : type == "rock"
          ? `${battle ? `` : `right-8 -bottom-16`}`
          : type == "scissors"
          ? `${battle ? `` : `left-24 -top-12`}`
          : type == "spock"
          ? `${battle ? `` : `top-20 -left-12`}`
          : `hidden`
      }`}
      data-type={type}
      onClick={onClick}
    >
      <div
        className={`bg-gradient-to-b w-32 aspect-square rounded-full ${
          type == "lizard"
            ? "to-lizard_to from-lizard_from drop-shadow-[0_6px_0_#5a3b94]"
            : type == "paper"
            ? "to-paper_to from-paper_from drop-shadow-[0_6px_0_#283570]"
            : type == "rock"
            ? "to-rock_to from-rock_from drop-shadow-[0_6px_0_#802637]"
            : type == "scissors"
            ? "to-scissors_to from-scissors_from drop-shadow-[0_6px_0_#8c6515]"
            : type == "spock"
            ? "to-cyan_to from-cyan_from drop-shadow-[0_6px_0_#295f69]"
            : ""
        } ${battle ? "scale-[250%]" : ""}`}
      >
        <div
          className={`absolute bg-white w-24 aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-[6px] ${
            type == "lizard"
              ? "border-[#dbd7db]"
              : type == "paper"
              ? "border-[#dbd7db]"
              : type == "rock"
              ? "border-[#dbd7db]"
              : type == "scissors"
              ? "border-[#dbd7db]"
              : type == "spock"
              ? "border-[#dbd7db]"
              : ""
          }`}
        >
          <img
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              type == "lizard"
                ? "w-[63px] h-[60px]"
                : type == "paper"
                ? "w-[49px] h-[59px]"
                : type == "rock"
                ? "w-[48px] h-[48px]"
                : type == "scissors"
                ? "w-[51px] h-[58px]"
                : type == "spock"
                ? "w-[45px] h-[59px]"
                : ""
            }`}
            src={
              type == "lizard"
                ? iconLizard
                : type == "paper"
                ? iconPaper
                : type == "rock"
                ? iconRock
                : type == "scissors"
                ? iconScissors
                : type == "spock"
                ? iconSpock
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
