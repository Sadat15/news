import { useState, useEffect } from "react";
import searchNews from "./api";
import NewsList from "./components/NewsList";
import SearchBar from "./components/SearchBar";

function App() {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const result = await searchNews();

    setNews(result);
  };

  const handleSubmit = async (term) => {
    const result = await searchNews(term);

    setNews(result);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <NewsList news={news} />
    </div>
  );
}

export default App;
