import { FC } from "react";
import { ImageItemProps } from "../../../types/types";

const ImageItem: FC<ImageItemProps> = ({ img }) => {
  return (
    <img
      src={img}
      alt="Imagen de instagram de Jinjer"
      width="300"
      height="300"
      loading="lazy"
    />
  );
};

export default ImageItem;
