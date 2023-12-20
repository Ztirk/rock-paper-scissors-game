import { PickIcon } from "../assets/interfaces/interfaces";

interface Props {
  children: React.ReactNode;
  pickIcon: PickIcon["type"];
}

export default function IconFrame({ children, pickIcon }: Props) {
  return (
    <div
      className={` ${
        pickIcon ? `flex flex-col justify-center items-center w-96 ` : ``
      }`}
    >
      {children}
    </div>
  );
}
