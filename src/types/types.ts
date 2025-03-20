import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface MemberArticleProps {
  image: string;
  icon: string;
  name: string;
  instrument: string;
  id: string;
}

export interface AnchorItemProps {
  title: string;
  id: string;
}

export interface ImageItemProps {
  img: string;
}

export type ColorType = "cyan" | "slate";

export interface AnchorFollowProps {
  icon: ReactElement;
  color: ColorType;
}

export interface PostCardsProps {
  img: string;
  user: string;
  message: string;
}

export interface VideoCardProps {
  video: string;
  title: string;
  paragraph: string;
  views: string;
}

export interface TShirtCardProps {
  title: string;
  price: number;
  img: string;
}

export interface SocialIcon {
  icon: IconType;
  name: string;
  link: string;
  color: string;
}
