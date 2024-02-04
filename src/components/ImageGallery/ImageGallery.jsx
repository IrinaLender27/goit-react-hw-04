import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.styleGalery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};
