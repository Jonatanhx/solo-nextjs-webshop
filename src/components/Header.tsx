import Link from "next/link";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";

export default function Header() {
  return (
    <header className="flex bg-gradient-to-r from-orange-500 to-orange-400 p-8">
      <Link href="/">
        <h1 className="font-bold text-3xl w-96 text-black">Header</h1>
      </Link>
      <Navbar />
      <RightPanel />
    </header>
  );
}
