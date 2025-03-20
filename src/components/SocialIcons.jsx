import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

function SocialIcons() {
  const icons = [
    {
      icon: <FaFacebook size={30} />,
      name: "Facebook",
      link: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaXTwitter size={30} />,
      name: "X",
      link: "https://x.com",
      color: "hover:text-gray-900",
    },
    {
      icon: <FaInstagram size={30} />,
      name: "Instagram",
      link: "https://instagram.com",
      color: "hover:text-pink-600",
    },
    {
      icon: <FaYoutube size={30} />,
      name: "Youtube",
      link: "https://youtube.com",
      color: "hover:text-red-600",
    },
    {
      icon: <FaTiktok size={30} />,
      name: "TikTok",
      link: "https://tiktok.com",
      color: "hover:text-black",
    },
  ];

  return (
    <article className="flex gap-5 items-center">
      {icons.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          title={item.name}
          rel="noopener noreferrer"
          className={`social-icons hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] transition-all duration-300 ${item.color}`}
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </article>
  );
}

export default SocialIcons;
