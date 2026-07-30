import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-yellow-500 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold">
           ⚡ QuickSupport CRM
        </h1>

        <div className="flex gap-6">

          <Link
  to="/"
  className="border border-white px-4 py-2 rounded-lg  font-bold hover:text-white hover:border-white-500 transition duration-300"
>
  Dashboard
</Link>

               

        </div>

      </div>
    </nav>
  );
}

export default Navbar;