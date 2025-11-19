import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== "admin") {
    redirect("/signin");
  }

  console.log(session.user); // Submission requirement

  // Sidebar navigation items
  const sidebar = (
    <nav className="space-y-2" aria-label="Admin navigation">
      <Link
        href="/admin_dashboard"
        className="block rounded px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
      >
        Admin Dashboard
      </Link>
      <Link
        href="/admin_dashboard/lessons"
        className="block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Edit Lessons
      </Link>
      <Link
        href="/admin_dashboard/users"
        className="block rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Manage Users
      </Link>
    </nav>
  );

  return (
    <DashboardLayout title="Admin Dashboard" sidebar={sidebar}>
      <div className="space-y-4">
        <div className="rounded border p-4">
          <h2 className="mb-2 text-lg font-semibold">Welcome!</h2>
          <p>
            This is your admin dashboard. Here you can find your courses,
            progress, and more.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded border p-4">
            <h3 className="mb-1 font-medium">Quick Actions</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              <li>Create a new course</li>
              <li>Review pending enrollments</li>
              <li>Post an announcement</li>
            </ul>
          </div>
          <div className="rounded border p-4">
            <h3 className="mb-1 font-medium">Statistics (demo)</h3>
            <p className="text-sm text-gray-600">Add charts here later.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
