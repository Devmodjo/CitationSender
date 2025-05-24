import { useState } from "react";
import { LoginPage } from "./../../../LoginPage";
import { createPortal } from "react-dom";
import { AppearOnScroll } from "../../../../utils/ScrollEffect";

export function NabarPreview() {
  const [clicked, setclicked] = useState(false);

  let LoginButton = document.getElementById("loginBtn");

  let handleClicked = (e) => {
    setclicked(!clicked);
  };

  return (
    <>
      <header className="headerPreview">
        <h2>Citation Sender</h2>
        <button id="loginBtn" onClick={handleClicked}>
          se connecter
        </button>
      </header>
      {clicked == true ? <ModalLogin /> : ""}
    </>
  );
}

export function ModalLogin() {
  let style = {
    position: "absolute",
    position: "fixed",
    top: "50",
    left: "50",
    transform: "translate(-50%, -50%)",
    // margin: "200px auto"
    // z-index:"999"
  };
  return createPortal(<LoginPage styles={style} id={"modalLogin"} />, document.body); // portal pour afficher
}
