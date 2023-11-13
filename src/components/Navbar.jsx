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
            <div
              data-w-id="47c040fb-44dc-02dc-629c-6a91ab46b16a"
              data-is-ix2-target="1"
              class="lottie-animation"
              data-animation-type="lottie"
              data-src="documents/lottieflow-menu-nav-09-ffffff-easey.json"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="2.5"
              data-duration="0"
              data-ix2-initial-state="1.5"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;