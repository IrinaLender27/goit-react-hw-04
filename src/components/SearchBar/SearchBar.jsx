import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.query.value === "") {
      toast.error("Please enter search parameters");
      return;
    }
    onSearch(event.target.elements.query.value);

    event.target.reset();
  };
  return (
    <header className={css.hederStyle}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inpyteStyle}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.buttonStyle} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
