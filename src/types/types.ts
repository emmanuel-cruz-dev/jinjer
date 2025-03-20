import { ReactElement } from "react";

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
