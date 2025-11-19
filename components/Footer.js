export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} LMS
        </p>
        <nav className="flex gap-4 text-sm">
          <a className="text-gray-700 hover:underline" href="#">
            Privacy
          </a>
          <a className="text-gray-700 hover:underline" href="#">
            Terms
          </a>
          <a className="text-gray-700 hover:underline" href="#">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
