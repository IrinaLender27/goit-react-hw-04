export const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} type="button">
      Load more
    </button>
  );
};
