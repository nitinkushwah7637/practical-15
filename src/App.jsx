
import { useRef, useState } from "react";
import "./index.css";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [user, setUser] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <div className="container">
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter username"
          required
        />

        <label>Password</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter password"
          required
        />

        <button type="submit">Login</button>
      </form>

      {user && (
        <div className="result">
          <h2>Submitted Information</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Password:</strong> {user.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
