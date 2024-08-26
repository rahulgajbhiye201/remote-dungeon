type Props = {
  skillName: string;
};

const Skill = ({ skillName }: Props) => {
  return (
    <div className="border-2 border-solid border-slate-300 px-1 py-0.5 text-sm lg:text-base">
      {skillName}
    </div>
  );
};

export default Skill;
