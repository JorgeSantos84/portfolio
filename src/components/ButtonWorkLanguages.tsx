interface ButtonWorkLanguagesProps {
  technology: string;
}

const ButtonWorkLanguages: React.FC<ButtonWorkLanguagesProps> = ({
  technology,
}) => {
  return (
    <div
      className="
    mt-1
    mr-1
    rounded-full
    bg-[var(--default-purple)]/10
    px-3
    py-1
    text-xs
    font-extrabold
    leading-5
    text-[var(--default-purple)]
    max-[500px]:px-[0.65rem]
    max-[500px]:font-bold
  "
    >
      {technology}
    </div>
  );
};

export default ButtonWorkLanguages;
