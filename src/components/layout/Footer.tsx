export function Footer() {
  return (
    <footer className="border-t border-stone-200/40">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="font-sans text-sm text-stone-400">
            {' '}
            Built by a medical student, for medical students. <br /> &copy;{' '}
            {new Date().getFullYear()} Rishabh J.
          </p>
          {/*<p className="font-sans text-sm text-stone-400">
            Made with &#9829; by a fellow medic
          </p>*/}
        </div>
      </div>
    </footer>
  );
}
