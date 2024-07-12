import AddPlayer from "./AddPlayer";
import EditPlayers from "./EditPlayers";

export default function AdminPage() {
  return (
    <div className="w-100 flex flex-col items-center justify-center">
      <h1>ADMIN</h1>

      <AddPlayer />
      <EditPlayers />
    </div>
  );
}
