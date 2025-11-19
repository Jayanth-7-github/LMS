"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useMemo } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const name = session?.user?.name;

  const roleHome = useMemo(() => {
    if (role === "admin") return "/admin_dashboard";
    if (role === "student") return "/student_dashboard";
    return "/";
  }, [role]);

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-black">
          LMS
        </Link>
        <div className="flex items-center gap-4">
          {status === "loading" && (
            <span className="text-gray-500">Loading...</span>
          )}
          {status !== "loading" && !session && (
            <>
              <Link href="/signin" className="text-blue-600 hover:underline">
                Sign In
              </Link>
              <Link href="/signup" className="text-black hover:underline">
                Sign Up
              </Link>
            </>
          )}
          {session && (
            <>
              <Link href={roleHome} className="text-black hover:underline">
                {role === "admin"
                  ? "Admin"
                  : role === "student"
                  ? "Student"
                  : "Dashboard"}
              </Link>
              <span className="text-sm text-gray-700">
                {name ? `Hi, ${name}` : "Signed in"} ({role})
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-red-600 hover:underline"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
