type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
