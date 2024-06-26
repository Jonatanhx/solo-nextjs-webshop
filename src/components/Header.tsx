import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";

export default function Header() {
  return (
    <header className="flex bg-gradient-to-r from-orange-500 to-orange-400 p-8">
      <div className="w-96 ">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/triangle-of-triangles.png"
            alt="Company logo"
            width={50}
            height={50}
          ></Image>
          <h1 className="text-black text-2xl font-bold">ToolTech</h1>
        </Link>
      </div>
      <Navbar />
      <RightPanel />
    </header>
  );
}
