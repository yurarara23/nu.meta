type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8 leading-relaxed">{description}</p>
    </>
  );
};

export default SectionHeader;
