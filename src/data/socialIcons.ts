import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { SocialIcon } from "../types/types";

export const socialIcons: SocialIcon[] = [
  {
    icon: FaFacebook,
    name: "Facebook",
    link: "https://facebook.com",
    color: "hover:text-blue-600",
  },
  {
    icon: FaXTwitter,
    name: "X",
    link: "https://x.com",
    color: "hover:text-gray-900",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    link: "https://instagram.com",
    color: "hover:text-pink-600",
  },
  {
    icon: FaYoutube,
    name: "Youtube",
    link: "https://youtube.com",
    color: "hover:text-red-600",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    link: "https://tiktok.com",
    color: "hover:text-black",
  },
];
