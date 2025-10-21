import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide drop-shadow-sm">
        Destinova
      </h1>

      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <Link
            to="/home"
            className="hover:text-yellow-200 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/destinations"
            className="hover:text-yellow-200 transition-colors duration-200"
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            to="/planner"
            className="hover:text-yellow-200 transition-colors duration-200"
          >
            Planner
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-yellow-200 transition-colors duration-200"
          >
            Contact & Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
