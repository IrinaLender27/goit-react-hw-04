import { ImageModal } from "../ImageModal/ImageModal";
import { useState } from "react";
import css from "./ImageCard.module.css";

export const ImageCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const toogle = () => {
    setShowModal((prevModal) => !prevModal);
  };
  return (
    <div>
      <img
        className={css.thumb}
        onClick={toogle}
        src={item.urls.small}
        alt={item.alt_description}
      />

      <ImageModal
        image={item.urls.regular}
        modalIsOpen={showModal}
        closeModal={toogle}
      />
    </div>
  );
};
