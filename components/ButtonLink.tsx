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
        overflow-hidden font-medium tracking-tighter text-white 
        bg-transparent border border-white/40 
        rounded-full transition-all duration-300
        hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
        active:scale-95
      "
    >
      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-white transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white"></span>

      <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
    </a>
  );
};

export default ButtonLink;
