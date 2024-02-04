import axios from "axios";

export const fetchImages = async (query, page) => {
  const key = "czXNytLB7bFoC5FZWEcM--rP71Bo3w-rF_QnGTPQNwk&";
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}&page=${page}`
  );
  return data;
};
