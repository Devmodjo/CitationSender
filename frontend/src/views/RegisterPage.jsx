import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Register() {
    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registedUser = {
      username: username,
      password: password,
      email: email.trim(),
    };

    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // verfication des champs
    if (!username || !password || !email) {
      alert("veillez remplir tous les champs");
      return;
    } else if (password.length < 5) {
      alert("le mot de passe doit contenir minimum 5 caractère");
      return;
    }
    else if(!emailRegex.test(registedUser.email)){
      alert("veullez renseigner une addresse mail valide");
      return;
    }
    // recuperation des donné du formulaire et envoi au serveur
    try {
      const req = await fetch("http://localhost:3000/api/users/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registedUser),
      });

      if (req.status === 200) {
        navigate("/login"); // se rediriger vers la page d'acceuil
        alert("nouvel utilisateur enregistrer");
        return await req.json();
      }
      throw new Error(
        "une erreur es survenue lors de l'enregistrement de l'utilisateur"
      );

    } catch (err) {
      console.log("une erreur est survenue : " + err.message);
    }
  };

  return (
    <div className="centered-form shadow contain-theme">
      <h2>Inscription</h2>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="votre nom utilisateur ici"
          required
        />
        <br />
        <label htmlFor="password">mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="votre mot de passe ici"
          required
        />
        <br />
        <label htmlFor="email">addresse email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="ihaveaccount">
          vous avez deja un compte,{" "}
          
          <Link to={"/login"}> <b>se connecter</b> </Link>{" "}
          
        </label>{" "}
        <br />
        <button type="submit">s'inscrire</button>
      </form>
    </div>
  );
}
