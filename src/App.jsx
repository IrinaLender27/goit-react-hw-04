import { SearchBox } from "./components/SearchBox";

export const App = () => {
  const searchImages = (query) => {
    console.log(query);
  };
  return (
    <>
      <SearchBox onSearch={searchImages} />
    </>
  );
};

export default App;
