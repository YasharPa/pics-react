import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 6bqD94RT8N0ZC6KRw-6QpVumj77kHRb8IOSQtCcXPiE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
