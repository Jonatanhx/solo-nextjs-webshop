import { UserCogIcon } from "lucide-react";
import Link from "next/link";

export default async function adminbutton() {
  /*   const session = await auth();

  const loggedInUser = await db.user.findFirst({
    where: {
      email: session.user.email,
    },
  }); */

  return (
    <div>
      <Link href="/admin">
        <UserCogIcon />
      </Link>
    </div>
  );
}
