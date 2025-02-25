export default function Header() {
  return (
    <header id="header">
      <div className="logo">
        <span className="icon fa-gem"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Veluxe Rentals</h1>
          <p>
            A fully responsive site template designed by
            <a href="https://html5up.net">HTML5 UP</a> and released
            <br />
            for free under the
            <a href="https://html5up.net/license">Creative Commons</a>
            license.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* <!--<li><a href="#elements">Elements</a></li>--> */}
        </ul>
      </nav>
    </header>
  );
}
