import React, { useState, useEffect } from "react"
import Profile from "../pages/Profile";

function Login({ onLogin }) {
  // Sets use state for userame, email, password, user info and logging in section.
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true); // toggle between login/signup

  // Check localStorage for existing user
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);
// handles login when a user fills the login form
  const handleLogin = (e) => {
    e.preventDefault();

    fetch( `http://localhost:3000/users?username=${username}`)
      .then((res) => res.json())
      .then((users) => {
        // uses password to find users
        const found = users.find((u) => u.password === password);
        if (found) {
          setUser(found);
          localStorage.setItem("user", JSON.stringify(found));
          onLogin(found);
        } else {
          // this message is displayed when a user eters invalid password or username
          alert("Invalid username or password");
        }
      });
  };
// This function handles user sign up and posts it to the json file
  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
      image: `https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80${username}`
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      // After a user signs in the user is setthe new user info and the pprofile is updated with the user info 
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        onLogin(data);
      });
  };
// if a user is found , the profile is displayed.
  if (user) {
    return (
     <Profile />
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        {isLoggingIn ? "Login" : "Sign Up"}
      </h2>
      {/* This forms deals with user login or sign up depending on their status(whether they have an account or not) */}
      <form onSubmit={isLoggingIn ? handleLogin : handleSignup}>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {/* conditionally renders the email fiels for new users. */}
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
        {/* Is rendered in both forms */}
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
          {/* The button displayes the login when a user logs in, and it displayes signup when a user signs up */}
          {isLoggingIn ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        {/* THis message is also conditionally rendered*/}
        {isLoggingIn ? (
          <>
            Don't have an account?{" "}
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