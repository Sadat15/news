import API from "./config";
import axios from "axios";

async function searchNews(term) {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?q=${term}&api-key=${API}`
    );
    // console.log(response.data.response.results);
    return response.data.response.results;
  } catch (error) {
    console.error(error);
  }
}

export default searchNews;
