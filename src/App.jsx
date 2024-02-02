import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import axios from "axios";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { Loading } from "./Loading/Loading";

const ACCESS_KEY = "czXNytLB7bFoC5FZWEcM--rP71Bo3w-rF_QnGTPQNwk&";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const searchPhoto = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
  };
  const pageLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(
          ` https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query.split(
            "/"[1]
          )}&page=${page}&per_page=20`
        );
        console.log(response);
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchPhoto} />
      {loading && <Loading />}
      {photos.length > 0 && <ImageGallery items={photos} />}
      {error && <ErrorMessage error={setError} />}
      <Toaster />
      {photos.length > 0 && !loading && <LoadMoreBtn onClick={pageLoadMore} />}
    </>
  );
};

export default App;
