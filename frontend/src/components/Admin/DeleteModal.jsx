import {deletePlayerById} from "../../api";
import Modal from "./Modal";

export default function DeleteModal({open, setOpen, player, setPlayerList}) {
  const deletePlayer = () => {
    console.log(player);
    setPlayerList((currentPlayerList) => {
      return currentPlayerList.filter((player) => {
        return player.id !== player_id;
      });
    });

    deletePlayerById(player_id).catch((error) => {
      alert("Apologies - player was not deleted");
    });
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
              deletePlayer(player_id);
              setOpen(false);
            }}
          >
            Delete
          </button>
          <button
            className="btn text-gray-800 btn-light w-full"
            onClick={() => {
              setOpen(false);
              console.log(player);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
