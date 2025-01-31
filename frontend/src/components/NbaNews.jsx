import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";

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
    <div className="min-w-100 flex flex-col items-center">
      <header className="text-3xl font-bold italic">NBA NEWS</header>
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-amber-600" />
    </div>
  ) : (
    <div className="flex flex-col gap-y-5 items-center mb-5">
      <header className="text-3xl font-bold italic">NBA NEWS</header>
      {articleList.map((article, index) => {
        return (
          <div
            key={index}
            className="w-80 border border-[#d97706] flex flex-col p-5 rounded-lg"
          >
            {/* <h2 className="text-white font-bold text-2xl">{article.source}</h2> */}
            <h2 className="text-white font-bold text-2xl">{article.title}</h2>
            <a
              href={article.url}
              target="_blank"
              className="my-2 text-red-700 hover:text-black border border-red-700 hover:bg-red-700"
            >
              Article Link
            </a>
            <Link
              to={{
                pathname: "/nba-news/article",
                search: `?article_url=${article.url}`,
              }}
              className="text-blue-700 hover:text-black border border-blue-700 hover:bg-blue-700"
            >
              AI Generated Article (beta)
            </Link>
          </div>
        );
      })}
    </div>
  );
}
