import { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { Loading } from "../Loading/Loading";
import { fetchImages } from "../../api";
import css from "./App.module.css";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const searchPhoto = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
  };
  const pageLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const { results, total_pages } = await fetchImages(query, page);

        setPhotos((prevPhotos) => [...prevPhotos, ...results]);
        setShowLoadMore(total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={searchPhoto} />
      {loading && <Loading />}
      {photos.length > 0 && <ImageGallery items={photos} />}
      {error && <ErrorMessage error={setError} />}
      <Toaster />
      {photos.length > 0 && showLoadMore && (
        <LoadMoreBtn disabled={loading} onClick={pageLoadMore} />
      )}
    </div>
  );
};

export default App;
