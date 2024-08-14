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
      <header className="text-3xl font-bold italic">NBA NEWS</header>
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  ) : (
    <div className="flex flex-col gap-y-5 items-center">
      <header className="text-3xl font-bold italic">NBA NEWS</header>
      {articleList.map((article) => {
        return (
          <div className="w-80 border border-sky-500">
            <h2 className="text-black">{article.title}</h2>
            <a
              href={article.url}
              target="_blank"
              className="text-sky-500 hover:text-sky-700"
            >
              Article Link
            </a>
            <p className="text-black">Source: {article.source}</p>
          </div>
        );
      })}
    </div>
  );
}
