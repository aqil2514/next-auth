"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not signen in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavMenu() {
  const pathName = usePathname();

  return (
    <div>
      <AuthButton />
      <hr />
      <Link href="/">
        <li className={pathName === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Home</li>
      </Link>
      <Link href="/protected" className={pathName === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
        Protected Route
      </Link>
      <Link href="/serverAction" className={pathName === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
        Server Action
      </Link>
      <Link href="/apiFromClient" className={pathName === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
        API From Client
      </Link>
      <Link href="/apiFromServer" className={pathName === "/apiFromServer" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
        API From Server
      </Link>
    </div>
  );
}
