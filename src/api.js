import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=czXNytLB7bFoC5FZWEcM--rP71Bo3w-rF_QnGTPQNwk&`,
    { params: { query, page, per_page: 10 } }
  );
  return response.data.results;
};
console.log(fetchImages());
