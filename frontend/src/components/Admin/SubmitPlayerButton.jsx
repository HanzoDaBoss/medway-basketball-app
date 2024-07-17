export default function SubmitPlayerButton({loading, submitPlayer}) {
  return loading ? (
    <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  ) : (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={submitPlayer}
    >
      SUBMIT
    </button>
  );
}
