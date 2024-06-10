import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-400 py-8 pl-8">
      <h1 className="font-bold text-3xl">Header</h1>
      <Navbar />
    </header>
  );
}
