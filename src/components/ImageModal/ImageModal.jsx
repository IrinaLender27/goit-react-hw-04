import Modal from "react-modal";
import css from "./ImageModul.module.css";

export const ImageModal = ({ image, isOpen, closeModal }) => {
  return (
    <Modal
      className={css.styleModal}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={`Selected Image`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      )}
    </Modal>
  );
};
