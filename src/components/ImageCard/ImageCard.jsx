import { ImageModal } from "../ImageModal/ImageModal";
import { useState } from "react";
export const ImageCard = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <img src={item.urls.small} onClick={() => openModal(item)} />

      <ImageModal
        image={selectedImage}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
