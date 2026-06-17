export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-sans text-sm text-stone-500">
            &copy; {new Date().getFullYear()} FestFlow. Built for Indian medical
            colleges.
          </p>
          <p className="font-sans text-sm text-stone-400">
            Made with &#9829; by a fellow medic
          </p>
        </div>
      </div>
    </footer>
  );
}
