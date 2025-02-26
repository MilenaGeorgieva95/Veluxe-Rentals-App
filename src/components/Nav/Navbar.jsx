import SecondaryBtn from "../Buttons/SecondaryBtn";

export default function Navbar() {
  return (
    <>
      <nav className="navContainer">
        <ul className="mainNav">
          <li>
            <SecondaryBtn text="Home" />
          </li>
          <li>
            <SecondaryBtn text="About" />
          </li>
          <li>
            <SecondaryBtn text="Cars" />
          </li>
        </ul>

        <ul className="userNav">
          <li>
            <SecondaryBtn text="Register" />
          </li>
          <li>
            <SecondaryBtn text="Login" />
          </li>
        </ul>
      </nav>
    </>
  );
}
