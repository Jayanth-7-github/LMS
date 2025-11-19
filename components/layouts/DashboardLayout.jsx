"use client";

export default function DashboardLayout({
  sidebar,
  children,
  title = "Dashboard",
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl gap-6 px-4 py-6">
        <aside className="hidden w-64 shrink-0 md:block">
          {sidebar ?? (
            <div className="rounded-lg border bg-white p-4 text-sm text-gray-700">
              Sidebar
            </div>
          )}
        </aside>
        <section className="flex-1">
          <header className="mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          </header>
          <div className="rounded-lg border bg-white p-4 text-gray-900">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
