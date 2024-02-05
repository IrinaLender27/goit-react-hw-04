import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <button
      className={css.buttonStyle}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      Load more
    </button>
  );
};
