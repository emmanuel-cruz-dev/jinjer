import {
  ChangeEvent,
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { IconType } from "react-icons";

export interface HeaderSideBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
  ref?: MutableRefObject<HTMLElement | null>;
}

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

export interface AlbumItemProps {
  id: number;
  cover: string;
  title: string;
  year: string;
}

export interface SongsListProps {
  title: string;
  src: string;
}

export interface UseMusicPlayerProps {
  songsList: SongsListProps[];
}

export interface ShopProductsProps {
  id: number;
  img: string;
  name: string;
  rating: number;
  price: number;
  sale?: boolean;
  color?: string;
}

export interface ShopCardProps {
  product: ShopProductsProps;
}

export interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

export interface UseShopReturn {
  products: ShopProductsProps[];
  shopProducts1: ShopProductsProps[];
  shopProducts2: ShopProductsProps[];
  productsTotal: number;
  handleFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleColor: (color: string) => void;
  handleProducts: () => void;
  handleArr: (num: number) => void;
}

export interface MediaDataProps {
  id: number;
  content?: string;
  date: string;
  title: string;
  text1: string;
  text2: string;
  text3?: string;
  text4?: string;
  link1: string;
  link2: string;
}

export interface MediaItemsRenderProps {
  title: string;
  arr: MediaDataProps[];
  route: string;
  formVideo?: boolean | string;
  image?: boolean | string;
}

export interface TitleArticleProps {
  title: string;
}

export interface BackgroundColorsProps {
  [key: string]: string[];
}

export interface MusicPlayerListProps {
  id: number;
  title: string;
  duration: string;
  src: string;
}

export interface ListItemProps {
  musicList: MusicPlayerListProps[];
  playSong: (id: number) => void;
  isPlaying: boolean;
  currentSong: number | null;
  color: string;
}

export interface UseMediaPlayerProps {
  musicList: MusicPlayerListProps[];
}

export interface FiltersProps {
  color: string;
  minPrice: number;
  maxPrice: number;
}

export interface FiltersContextType {
  filters: FiltersProps;
  setFilters: Dispatch<SetStateAction<FiltersProps>>;
}

export interface FiltersProviderProps {
  children: ReactNode;
}

export interface CartItemProps {
  id?: number;
  img: string;
  price: number;
  name: string;
  quantity: number;
  subtractProduct: () => void;
  addToCart: () => void;
}

export interface CartContextType {
  cart: CartItemProps[];
  addToCart: (product: CartItemProps) => void;
  subtractProduct: (product: CartItemProps) => void;
  removeFromCart: (product: CartItemProps) => void;
  clearCart: () => void;
  shopTotalPrice: () => string;
}

export interface CartProviderProps {
  children: ReactNode;
}
