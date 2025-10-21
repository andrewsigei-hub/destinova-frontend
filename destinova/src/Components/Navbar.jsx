import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Destinova</h1>
      <ul className="flex gap-6">
        <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/destinations" className="hover:text-gray-300">Destinations</Link></li>
        <li><Link to="/planner" className="hover:text-gray-300">Planner</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact & Help</Link></li>
      </ul>
    </nav>
  );
}
