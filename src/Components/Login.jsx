import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "../pages/Profile";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/users?username=${username}`)
      .then((res) => res.json())
      .then((users) => {
        const found = users.find((u) => u.password === password);
        if (found) {
          setUser(found);
          localStorage.setItem("user", JSON.stringify(found));
        } else {
          toast.error("Invalid username or password 😞", {
            position: "top-right",
            autoClose: 2500,
          });
        }
      })
      .catch(() =>
        toast.error("Server error! Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        })
      );
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
      image:
        "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80",
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        onLogin(data);

        toast.success("Account created successfully! 🎉", {
          position: "top-right",
          autoClose: 2000,
        });

        setTimeout(() => navigate("/profile"), 1500);
      })
      .catch(() =>
        toast.error("Signup failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        })
      );
  };

  if (user) {
    return <Profile user={user} />;
  }

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 border rounded shadow relative">
      <ToastContainer /> {/* ✅ Toast container here */}

      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        {isLoggingIn ? "Login" : "Sign Up"}
      </h2>

      <form onSubmit={isLoggingIn ? handleLogin : handleSignup}>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {!isLoggingIn && (
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isLoggingIn ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        {isLoggingIn ? (
          <>
            Don’t have an account?{" "}
            <button
              onClick={() => setIsLoggingIn(false)}
              className="text-blue-600 underline"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setIsLoggingIn(true)}
              className="text-blue-600 underline"
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
}

export default Login;
