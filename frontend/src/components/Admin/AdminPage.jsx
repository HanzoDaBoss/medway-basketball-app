import {useContext} from "react";
import AddPlayer from "./AddPlayer";
import EditPlayers from "./EditPlayers";
import {UserContext} from "../contexts/User";

export default function AdminPage() {
  const {user} = useContext(UserContext);

  return user ? (
    <div className="w-100 flex flex-col items-center justify-center">
      <h1>ADMIN</h1>
      <AddPlayer />
      <EditPlayers />
    </div>
  ) : (
    <h1>You do not have admin access!</h1>
  );
}
