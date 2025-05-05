import { useState } from "react";
import { MainappPreview } from './home/preview/mainapp.preview'
import { LoginPage } from "./LoginPage";

export function IndexPage() {
  
  // simulation de session
  const sessionid = 0;

  return (
    <>
    {sessionid != 0 ? <MainappPreview /> : <LoginPage />}
    </>
  );
}
