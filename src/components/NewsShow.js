import "./NewsShow.css";

function NewsShow({ article }) {
  return (
    <div className="article">
      <div>{article.webTitle}</div>
    </div>
  );
}

export default NewsShow;
