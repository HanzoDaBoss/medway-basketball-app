import { useEffect, useState } from "react";
import { getArticleHtmlById } from "../api";
import { useParams, useSearchParams } from "react-router-dom";

export default function NbaArticle() {
  const [searchParams, setSearchParams] = useSearchParams();
  const article_link = searchParams.get("article_url");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(article_link);
    setLoading(true);
    getArticleHtmlById({ articleLink: article_link }).then((articleHtml) => {
      setArticle(articleHtml);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <div className="min-w-100 flex flex-col items-center">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-amber-600" />
    </div>
  ) : (
    <div
      className="px-10 text-justify"
      dangerouslySetInnerHTML={{ __html: article }}
    />
  );
}
