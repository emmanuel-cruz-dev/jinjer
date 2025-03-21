import { socialIcons } from "../../data/socialIcons";

function SocialIcons() {
  return (
    <article className="flex gap-5 items-center">
      {socialIcons.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          title={item.name}
          rel="noopener noreferrer"
          className={`social-icons hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] transition-all duration-300 ${item.color}`}
          aria-label={item.name}
        >
          {<item.icon size={28} />}
        </a>
      ))}
    </article>
  );
}

export default SocialIcons;
