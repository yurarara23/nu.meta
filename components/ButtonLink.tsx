type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative inline-flex items-center justify-center 
        px-8 py-3 
        overflow-hidden font-bold tracking-widest text-white 
        bg-transparent border border-cyan-500/40 
        rounded-full transition-all duration-300
        hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
        active:scale-95
      "
    >
      <span className="absolute inset-0 w-full h-full rounded-full bg-cyan-500 transition-all duration-300 scale-0 group-hover:scale-100"></span>

      <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
    </a>
  );
};

export default ButtonLink;
