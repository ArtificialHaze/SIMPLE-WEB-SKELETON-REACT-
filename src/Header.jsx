import { useRef } from "react";
import { Container } from "react-bootstrap";
 

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Careers",
    url: "#",
  },
  {
    display: "Page",
    url: "#",
  },
  {
    display: "VLOG",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <section className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center">
              <i className="fas fa-search"></i>
              Students.
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-right">
              <p className="mb-0 d-flex align-items-center gap-3">
                <i className="fas fa-phone"></i> +955 999 999 999
              </p>
            </div>
          </div>
          <div className="mobile__menu">
            <span>
              <i onClick={menuToggle} className="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
