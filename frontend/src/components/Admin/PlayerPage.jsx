import {useParams} from "react-router-dom";
import AddPlayer from "./AddPlayer";

export default function PlayerPage() {
  const {player_id} = useParams();
  return (
    <>
      <AddPlayer />
    </>
  );
}
