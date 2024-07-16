import {useState} from "react";
import {postLogin} from "../../api";

export default function Login({setOpen}) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    postLogin({username: usernameInput, password: passwordInput}).then(
      (response) => {
        setLoading(false);
        if ([400, 401, 500].includes(response.status)) {
          setLoginFailure(true);
        } else if (response.status === 200) {
          setLoginFailure(false);
          setOpen(false);
        }
      }
    );
  };

  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username/Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username/Email"
            value={usernameInput}
            onChange={handleUsernameInput}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={passwordInput}
            onChange={handlePasswordInput}
          />
        </div>
        <div class="flex flex-col items-center">
          {loading ? (
            <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          ) : (
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitLogin}
            >
              Sign In
            </button>
          )}
        </div>
        <div class="flex flex-col items-center">
          {!loginFailure ? (
            <></>
          ) : (
            <label class="block text-red-700 text-sm font-bold mb-2 mt-3">
              Error: Username and/or Password is invalid
            </label>
          )}
        </div>
      </form>
    </div>
  );
}
