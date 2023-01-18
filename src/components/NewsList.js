import NewsShow from "./NewsShow";

function NewsList({ news }) {
  const renderedNews = news.map((article) => {
    return <NewsShow key={article.id} article={article} />;
  });

  return <div className="news-list">{renderedNews}</div>;
}

export default NewsList;
