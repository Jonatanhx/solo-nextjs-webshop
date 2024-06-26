import { auth } from "@/auth";
import Link from "next/link";
import AdminButton from "./AdminButton";
import AuthButtons from "./AuthButtons";

export default async function RightPanel() {
  const session = await auth();
  return (
    <nav className="flex items-center w-96 justify-end flex-row">
      <AuthButtons />
      <AdminButton />
      <Link href="/profile">
        <p className="text-lg p-2">{session?.user?.name}</p>
      </Link>
    </nav>
  );
}
