import menu from "../images/menu.png"
const Navbar = () => {
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar w-nav"
    >
      <div class="na-container w-container">
        <a href="index.html" class="brand w-nav-brand">
          <img
            src="https://assets-global.website-files.com/64ec355c1d4114b50bd5f475/64ec36773e9f2319bdcf9ce5_nucleus.svg"
            loading="lazy"
            alt=""
            class="logo-nav"
          />
        </a>
        <div class="div-block-26">
          <nav role="navigation" class="nav-menu w-nav-menu">
            <a href="#" class="nav-link-3 w-nav-link">
              For Companies
            </a>
            <a href="#" class="nav-link w-nav-link">
              About Us
            </a>
            <a href="#" class="nav-link-2 w-nav-link">
              Contact Us
            </a>
          </nav>
          <div class="menu-button w-nav-button">
          <img
            src={menu}
            loading="lazy"
            alt=""
            class="menu-nav"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;