interface Props {
  children: React.ReactNode;
}

export default function Background({ children }: Props) {
  

  return (
    <div
      className={`w-screen h-screen
                bg-gradient-to-b from-background_from to-background_to 
                flex flex-col justify-center items-center gap-20`}
    >
      {children}
    </div>
  );
}
