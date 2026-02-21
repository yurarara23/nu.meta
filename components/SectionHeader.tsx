type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="text-4xl font-extrabold mb-4 text-white tracking-tighter italic">
        {title}
      </h2>
      <div className="h-1 w-20 mb-8 bg-cyan-500 mx-auto rounded-full" />

      <p className="text-lg mb-8 leading-relaxed">{description}</p>
    </>
  );
};

export default SectionHeader;
