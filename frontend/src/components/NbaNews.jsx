import {useEffect, useState} from "react";
import {getArticles} from "../api";

export default function () {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles().then((articles) => {
      setArticleList(articles);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div class="min-w-100 flex flex-col items-center">
      <header>Leaderboard</header>
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  ) : (
    <div className="flex flex-col items-center">
      {articleList.map((article) => {
        return (
          <>
            <h2>{article.title}</h2>
            <p>{article.url}</p>
            <p>{article.source}</p>
          </>
        );
      })}
    </div>
  );
}
