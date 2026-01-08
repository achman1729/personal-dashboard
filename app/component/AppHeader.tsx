export default function AppHeader() {
  return (
    <div>
      <header className="flex justify-between items-center mb-6 p-4">
        <h2 className="text-2xl semi-bold">Overview</h2>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-slate-300">Hello, Achin</span>
          <button className="bg-slate-800 text-slate-100 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
            logout
          </button>
        </div>
      </header>
    </div>
  );
}
