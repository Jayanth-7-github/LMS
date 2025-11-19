"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const role = session?.user?.role;

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.replace("/signin");
      return;
    }
    if (role === "admin") router.replace("/admin_dashboard");
    else if (role === "student") router.replace("/student_dashboard");
    else router.replace("/");
  }, [status, session, role, router]);

  return (
    <main className="min-h-screen p-8">
      <p className="text-gray-600">Redirecting to your dashboard...</p>
    </main>
  );
}
