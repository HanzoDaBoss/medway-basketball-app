import { useContext, useState } from "react";
import { postLogin } from "../../api";
import { UserContext } from "../contexts/User";

export default function Login({ setOpen }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleUsernameInput = (e) => {
    setUsernameInput(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    postLogin({ username: usernameInput, password: passwordInput }).then(
      (response) => {
        setLoading(false);
        if ([400, 401, 500].includes(response.status)) {
          setLoginFailure(true);
        } else if (response.status === 200) {
          setUser(response.data);
          setLoginFailure(false);
          setOpen(false);
        }
      }
    );
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-zinc-900 outline-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username/Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            id="username"
            type="text"
            placeholder="Username/Email"
            value={usernameInput}
            onChange={handleUsernameInput}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="password"
            type="password"
            placeholder="******************"
            value={passwordInput}
            onChange={handlePasswordInput}
          />
        </div>
        <div className="flex flex-col items-center">
          {loading ? (
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-amber-600" />
          ) : (
            <button
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitLogin}
            >
              Sign In
            </button>
          )}
        </div>
        <div className="flex flex-col items-center">
          {!loginFailure ? (
            <></>
          ) : (
            <label className="block text-red-700 text-sm font-bold mb-2 mt-3">
              Error: Username or Password is invalid
            </label>
          )}
        </div>
      </form>
    </div>
  );
}
