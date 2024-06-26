"use client";

import { signOut } from "next-auth/react";

export default function LogOutButton() {
  return (
    <button className="p-2" onClick={() => signOut()}>
      Log out
    </button>
  );
}
