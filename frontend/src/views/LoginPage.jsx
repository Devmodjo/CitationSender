import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loggedUserInfo = {
    username: username,
    password: password
  }

  return (
    <div className="centered-form shadow contain-theme">
      <h2>Connexion</h2>
      <form method="post">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="votre nom utilisateur"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="votre mot de passe ici !"
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <label htmlFor="donthaveaccount">
          {" "}
          vous n'avez pas encore de compte,{" "}
          <Link to={"/register"}>
            {" "}
            <b>s'inscrire</b>{" "}
          </Link>
        </label>
        <br />
        <button>se connecter</button>
      </form>
    </div>
  );
}
