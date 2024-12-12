import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const SocialIcons = () => {
  const icons = [
    {
      icon: <FaFacebook size={26} />,
      name: "Facebook",
      link: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaXTwitter size={26} />,
      name: "X",
      link: "https://x.com",
      color: "hover:text-gray-900",
    },
    {
      icon: <FaInstagram size={26} />,
      name: "Instagram",
      link: "https://instagram.com",
      color: "hover:text-pink-600",
    },
    {
      icon: <FaYoutube size={26} />,
      name: "Youtube",
      link: "https://youtube.com",
      color: "hover:text-red-600",
    },
    {
      icon: <FaTiktok size={26} />,
      name: "TikTok",
      link: "https://tiktok.com",
      color: "hover:text-black",
    },
  ];

  return (
    <div className="flex gap-4 items-center">
      {icons.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          title={item.name}
          rel="noopener noreferrer"
          className={`social-icons hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] transition-colors duration-300 ${item.color}`}
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
