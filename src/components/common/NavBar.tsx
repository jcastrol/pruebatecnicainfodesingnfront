import { NavLink, Outlet } from "react-router-dom";
import { PAGES } from "../../router/Root";

export const NavBar = () => {
  const base = "rounded-md px-3 py-2 text-sm font-medium";
  const unselected = "text-gray-300 hover:bg-gray-700 hover:text-white";
  const selected = "bg-gray-900 text-white";
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <div className="ml-6 block">
                <div className="flex space-x-4">
                  <NavLink
                    to={`/${PAGES.tramos}`}
                    className={({ isActive }) =>
                      `${base} ${isActive ? selected : unselected}`
                    }
                    aria-current="page"
                  >
                    Tramos
                  </NavLink>
                  <NavLink
                    to={`/${PAGES.clientes}`}
                    className={({ isActive }) =>
                      `${base} ${isActive ? selected : unselected}`
                    }
                    aria-current="page"
                  >
                    Clientes
                  </NavLink>
                  <NavLink
                    to={`/${PAGES.tramosClientes}`}
                    className={({ isActive }) =>
                      `${base} ${isActive ? selected : unselected}`
                    }
                    aria-current="page"
                  >
                    Tramos Clientes
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
