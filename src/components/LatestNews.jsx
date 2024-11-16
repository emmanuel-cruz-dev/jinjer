import React from "react";
import CardImg from "../assets/images/blog03.jpg";

const LatestNews = () => {
  return (
    <section className="latest-news bg-background py-16" id="latest-news">
      <article className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="logo text-3xl">
            Latest N<span>ew</span>s
          </h2>
          <p>
            The latest N3 news is up to events in our concerts here! Welcome to
            the N3 World!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="latest-news__cards-container flex justify-center items-center gap-8">
            {/* Card 1 */}
            <div className="latest-news__card flex flex-col w-[22rem] gap-3">
              <a href="#">
                <figure className="overflow-hidden">
                  <img
                    className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                    src={CardImg}
                    alt=""
                  />
                </figure>
                <h3 className="uppercase font-bold tracking-wide text-lg">
                  Neue zwohandbreit EP in arbeit
                </h3>
              </a>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                quaerat tempora. Expedita voluptatem maxime a!
              </p>
              <a
                className="uppercase hover:underline transition-all duration-300 ease-in-out"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
              <time className="text-sm uppercase" datetime="2018-01-16">
                16 Jan 2018
              </time>
            </div>

            {/* Card 2 */}
            <div className="latest-news__card flex flex-col w-[22rem] gap-3">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                quaerat tempora. Expedita voluptatem maxime a!
              </p>
              <a
                className="uppercase"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
              <time className="text-sm uppercase" datetime="2018-01-16">
                16 Jan 2018
              </time>
            </div>

            {/* Card 3 */}
            <div className="latest-news__card flex flex-col w-[22rem] gap-3">
              <figure className="overflow-hidden">
                <img
                  className="scale-105 -rotate-3 hover:scale-100 hover:rotate-0 transition-transform duration-300"
                  src={CardImg}
                  alt=""
                />
              </figure>
              <h3 className="uppercase font-bold tracking-wide text-lg">
                Neue zwohandbreit EP in arbeit
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                quaerat tempora. Expedita voluptatem maxime a!
              </p>
              <a
                className="uppercase"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
              <time className="text-sm uppercase" datetime="2018-01-16">
                16 Jan 2018
              </time>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined flex justify-center items-center p-3 font-bold border-2 border-cyan-50">
              arrow_back_ios
            </span>
            <span className="material-symbols-outlined flex justify-center items-center p-3 font-bold border-2 border-cyan-50">
              arrow_forward_ios
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LatestNews;
