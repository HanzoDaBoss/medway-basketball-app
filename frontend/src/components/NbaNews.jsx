import {useState} from "react";
import {getArticles} from "../api";

export default function () {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getArticles().then((players) => {
      const playersWithGrades = gradeConverter(players);
      setPlayerList(playersWithGrades);
      setLoading(false);
    });
  }, [sortBy]);

  return <></>;
}
