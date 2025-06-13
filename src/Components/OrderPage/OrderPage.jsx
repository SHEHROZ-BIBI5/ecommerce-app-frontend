 import { useLocation } from "react-router-dom";
import { useState } from "react";

const OrderPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Form validation
    if (!isLogin) {
      if (!name.trim() || !locationInput.trim()) {
        setError("Name and Location are required.");
        return;
      }
    }

    if (!email.trim() || !password.trim()) {
      setError("Email and Password are required.");
      return;
    }

    // Dummy success message
    setSuccess(isLogin ? "Login successful!" : "Order placed successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          {isLogin ? "Login" : "Place Your Order"}
        </h2>

        <form className="space-y-4 text-black" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Location"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Show error or success messages */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90"
          >
            {isLogin ? "Login" : "Submit Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
