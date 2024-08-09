import {useState} from "react";
import {getArticles} from "../api";

export default function () {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    // setLoading(true);
    getArticles().then((articles) => {
      setArticleList(articles);
      // setLoading(false);
    });
  }, []);

  return <></>;
}
