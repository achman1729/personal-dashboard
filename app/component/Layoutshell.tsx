import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";

export default function Layoutshell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-slate-900 font-sans text-slate-100">
      <Sidebar />
      <main className="flex-1 items-center justify-center mb-6">
        <AppHeader />
        {children}
      </main>
    </div>
  );
}

