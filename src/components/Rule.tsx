import { useState } from "react";
import x from "../assets/images/icon-close.svg";
import rule from "../assets/images/image-rules-bonus.svg";

export default function Rule() {
  const [rulePopUp, setRulePopUp] = useState<boolean>(false);

  return (
    <>
      <div
        className={`${
          rulePopUp
            ? `absolute
             bg-black/50
               w-screen h-screen`
            : `hidden`
        }`}
      ></div>

      <div
        className={`${
          rulePopUp
            ? `absolute
             bg-white w-[450px] h-[500px]
               rounded-lg
               flex flex-col justify-center gap-5
               px-10
                `
            : `hidden`
        }`}
      >
        <div
          className={`flex justify-between
                      font-bold text-4xl text-dark`}
        >
          <h1>RULES</h1>

          <div className={`flex items-center`}>
            <img
              className={`scale-125
                          cursor-pointer`}
              src={x}
              onClick={() => {
                setRulePopUp((prev) => !prev);
              }}
            />
          </div>
        </div>
        <img className={``} src={rule} />
      </div>

      <div
        className={`tracking-widest text-white text-3xl
                    absolute right-[2.5%] bottom-[2.5%]
                    border border-white rounded-xl
                    px-12 py-3 `}
        onClick={() => setRulePopUp((prev) => !prev)}
      >
        RULES
      </div>
    </>
  );
}
