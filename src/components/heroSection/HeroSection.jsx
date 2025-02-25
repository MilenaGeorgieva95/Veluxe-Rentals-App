import Header from "./Header";
import Main from "./Main";

export default function HeroSection() {
  return (
    <>
      <div className="is-preload">
        {/* <!-- Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Header --> */}
          <Header />

          {/* <!-- Main --> */}
          <Main />

          {/* <!-- Footer --> */}
          {/* <footer id="footer">
            <p className="copyright">
              &copy; Untitled. Design:{" "}
              <a href="https://html5up.net">HTML5 UP</a>.
            </p>
          </footer> */}
        </div>

        {/* <!-- BG --> */}
        <div id="bg"></div>
      </div>
    </>
  );
}
