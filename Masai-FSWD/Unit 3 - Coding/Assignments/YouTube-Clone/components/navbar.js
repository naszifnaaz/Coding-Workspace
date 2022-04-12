function navbar()
{
    return `<nav>
    <div id="left-menu">
      <div id="hamnurger-menu">
        <i class="fa-solid fa-bars fa-lg"></i>
      </div>
      <div id="youtube-logo">
      <a href = "./index.html">
        <img
          src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
          alt="Youtube-logo"
          id="yt-logo"
        />
      </div>
      </a>
    </div>
    <div id="search-field">
      <input type="text" placeholder="Search Videos" id="search"/>
      <div id="search-logo">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div id="logo-user">
      <i class="fa-solid fa-video fa-lg"></i>
      <i class="fa-solid fa-bullseye fa-lg"></i>
      <i class="fa-solid fa-bell fa-lg"></i>
      <i class="fa-solid fa-user fa-lg"></i>
    </div>
  </nav>`
}

export default navbar;