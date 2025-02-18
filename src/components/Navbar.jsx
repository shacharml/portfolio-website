import { useState } from "react";
import { NAVIGATION_LINKS } from "../../constants";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 flex justify-center lg:top-4">
        {/* {desktop Menu} */}
        <div
          className="hidden lg:flex items-center justify-between rounded-full border border-white/30 
      px-6 py-3 backdrop-blur-lg w-fit gap-12"
        >
          <div className="text-white text-lg px-6">
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default navigation
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Enables smooth scrolling
                  });
                }}
              >
                <span className="uppercase">Shachar Males </span>
              </a>
            </div>
          </div>

          <ul className="flex items-center gap-4 px-2">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm hover:text-stone-300"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* {Mobile Menu} */}
        <div className="py-2 backdrop-blur-md w-full lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default behavior
                  setIsMobileMenuOpen(false); // Close menu
                  // Scroll to top smoothly
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <span className="pl-2 uppercase">Shachar Males</span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="m-2 h-6 w-5" />
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="m-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full next-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
