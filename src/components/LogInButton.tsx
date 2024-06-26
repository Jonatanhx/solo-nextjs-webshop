"use client";
import { signIn } from "next-auth/react";

export default function LogInButton() {
  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  return (
    <button className="p-2" onClick={handleSignIn}>
      Log in
    </button>
  );
}
