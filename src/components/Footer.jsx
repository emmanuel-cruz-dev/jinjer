import Name from "./Name";
import SocialIcons from "./SocialIcons";
import NephewsLogo from "../assets/icons/nephews-logo.png";
import CDCover from "../assets/images/blog-masonry-image-5.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <article className="flex flex-col lg:flex-row gap-10 justify-between items-center px-20 py-16 border-b border-gray-600">
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-2 w-44">
            <img className="footer__nephews-logo" src={NephewsLogo} alt="" />
            <div className="text-2xl">
              <Name />
            </div>
          </div>

          <div className="footer__social">
            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-16">
          <div className="posts flex flex-col gap-4">
            <h3 className="footer__title">Latest Posts</h3>
            <div className="flex gap-4 items-center border-b border-gray-600 pb-4">
              <figure>
                <img src={CDCover} alt="" width={72} />
              </figure>
              <div className="flex flex-col justify-around h-full">
                <h4>
                  <a href="#">Band on Tour</a>
                </h4>
                <time>September 25, 2022</time>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <figure>
                <img src={CDCover} alt="" width={72} />
              </figure>
              <div className="flex flex-col justify-around h-full">
                <h4>
                  <a href="#">Crows Perch Review</a>
                </h4>
                <time>November 11, 2022</time>
              </div>
            </div>
          </div>

          <div className="bookings flex flex-col gap-4">
            <h3 className="footer__title">Bookings</h3>
            <ul>
              <li>Max Weatherall. Productions</li>
              <li>562 Sycamore Circle</li>
              <li>Atlanta, GA 30342</li>
              <li>T:+920364426</li>
              <li>
                <a href="#">www.qodeinteractive.com</a>
              </li>
            </ul>
          </div>

          <div className="record-labels flex flex-col gap-4">
            <h3 className="footer__title">Record Labels</h3>
            <ul>
              <li>
                <a
                  href="https://www.metallica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Metallica
                </a>
              </li>
              <li>
                <a
                  href="https://www.megadeth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Megadeth
                </a>
              </li>
              <li>
                <a
                  href="https://demo.farost.net/backtorock/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plantilla Principal
                </a>
              </li>
              <li>
                <a
                  href="https://rebellion.qodeinteractive.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plantilla Secundaria
                </a>
              </li>

              <li>Emmanuel Cruz Productions</li>
            </ul>
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-6 items-center p-8 uppercase text-xs">
        <ul className="footer__list flex flex-col md:flex-row gap-6 text-center">
          <li>
            <a href="#">Credits</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>© 2024 N3phews</li>
          <li>© The Uncles Recordings</li>
          <li>The N3phews club®</li>
        </ul>
        <p>
          © 2024 N3phews. Powered by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://emmanuel-cruz.netlify.app/"
          >
            Emmanuel
          </a>
        </p>
      </article>
    </footer>
  );
};

export default Footer;
