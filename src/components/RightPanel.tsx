import AdminButton from "./AdminButton";
import AuthButtons from "./AuthButtons";

export default function RightPanel() {
  return (
    <nav className="flex items-center w-36 justify-end">
      <AuthButtons />
      <AdminButton />
      <h1 className="text-lg">Name</h1>
    </nav>
  );
}
