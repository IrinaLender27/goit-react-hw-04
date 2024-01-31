export const SearchBox = ({ onSerch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSerch(event.target.elements.query.value);

    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
