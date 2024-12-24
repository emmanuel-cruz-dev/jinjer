import {
  FaSpotify,
  FaSoundcloud,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="social-links flex gap-4">
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Youtube"
      >
        <FaYoutube />
      </a>
      <a
        href="https://soundcloud.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Soundcloud"
      >
        <FaSoundcloud />
      </a>
      <a
        href="https://spotify.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Spotify"
      >
        <FaSpotify />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
