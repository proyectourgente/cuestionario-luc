const Header = () => {
  return (
    <header className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="font-bold text-xl text-polisBlue">
              Cuestionario LUC
            </a>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-polisBlue"
            >
              Información sobre la LUC
            </a>
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              ¿Cómo Funciona?
            </a>
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Quiénes Somos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
