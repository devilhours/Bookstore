import { useState } from "react";

const Authentication = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Functions to handle modals
  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const closeModals = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(false);
  };

  return (
    <div className="flex justify-end p-4">
      {/* Sign Up Button */}
      <button
        className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 mr-4"
        onClick={openSignUp}
      >
        Sign Up
      </button>

      {/* Login Button */}
      <button
        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
        onClick={openLogin}
      >
        Login
      </button>

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModals}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-black">
              Signup with bookStore
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="College Name"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-gray-700 mb-2">I am a:</label>
                <div>
                  <label className="mr-4 text-black">
                    <input type="radio" name="gender" value="male" /> Male
                  </label>
                  <label className="mr-4 text-black">
                    <input type="radio" name="gender" value="female" /> Female
                  </label>
                  <label className="mr-4 text-black">
                    <input type="radio" name="gender" value="female" /> Other
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-800"
              >
                Create Account
              </button>
            </form>
            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account? </span>
              <a
                href="#"
                onClick={openLogin}
                className="text-teal-500 hover:underline"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModals}
            >
              &times;
            </button>
            <h2 className="text-black text-xl font-bold mb-4 text-center">
              Login with bookStore
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-800"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <span className="text-gray-600">
                Click{" "}
                <a
                  href="#"
                  onClick={openSignUp}
                  className="text-teal-700 hover:underline"
                >
                  here
                </a>{" "}
                to register a new account
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
