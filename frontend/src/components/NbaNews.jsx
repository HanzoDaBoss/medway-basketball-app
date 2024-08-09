import {useState} from "react";
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

  return <></>;
}
