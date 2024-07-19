import {deletePlayerById} from "../../api";
import Modal from "./Modal";

export default function DeleteModal({
  open,
  setOpen,
  player_id,
  playerList,
  setPlayerList,
  setDeletedPlayer,
}) {
  const deletePlayer = () => {
    deletePlayerById(player_id)
      .then(() => {
        setPlayerList((currentPlayerList) => {
          return currentPlayerList.filter((player) => player.id !== player_id);
        });
        console.log(playerList);
      })
      .catch((error) => {
        alert("Apologies - player was not deleted");
      });
    setDeletedPlayer(true);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="text-center w-56">
        <div className="mx-auto my-4 w-48">
          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete this player?
          </p>
        </div>
        <div className="flex gap-4">
          <button
            className="btn text-red-500 btn-danger w-full"
            onClick={() => {
              deletePlayer();
              setOpen(false);
            }}
          >
            {" "}
            Delete
          </button>

          <button
            className="btn text-gray-800 btn-light w-full"
            onClick={() => {
              setOpen(false);
              console.log(player_id);
            }}
          >
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
