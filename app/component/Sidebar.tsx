import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4">
        <h1 className="text-2xl semi-bold mb-6">My Dashboard</h1>
        <nav className="space-y-2">
          <Link
            href="/"
            className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/settings"
            className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
          >
            Settings
          </Link>
          <Link
            href="/profile"
            className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/logout"
            className="block p-2 rounded-md hover:bg-slate-800 transition-colors"
          >
            Logout
          </Link>
        </nav>
      </aside>
    </div>
  );
}
