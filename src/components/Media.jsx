const VideoCard = ({ video, views }) => {
  return (
    <div className="flex justify-center flex-col gap-4 border border-slate-500 p-6">
      <iframe
        width="320"
        height="220"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col gap-3">
        <a href="#" className="uppercase font-bold text-lg">
          Hayko Cepkin - yalniz kalsin Rock'n Coke
        </a>
        <p>
          Suspendisse eget ornare eros. Cras sit amet pulvinar mi. Nunc
          dignissim nunc eros, eget luctus…
        </p>
        <a
          href="#"
          className="flex justify-between py-2 px-4 bg-slate-500 hover:bg-slate-600 transition-colors duration-300"
        >
          <span>
            <span>{views}</span> Views
          </span>
          <span>Watch Now</span>
        </a>
      </div>
    </div>
  );
};

const Media = () => {
  return (
    <section className="scroll-top-margin media py-16 mx-auto" id="media">
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            Multi<span>media</span>
          </h2>
          <p className="text-lg">
            Our latest videos, audios on our official Youtube channel! Don't
            forget subscribe us!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-52 gap-y-12 w-full md:w-5/6">
          <VideoCard
            video={
              "https://www.youtube.com/embed/n_GFN3a0yj0?si=ZQ-1ic0dnGjxqqPQ"
            }
            views="339M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/JU5LMG3WFBw?si=fVPXj-FKsBl3RFpx"
            }
            views="28M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/t365MuktYQs?si=APy6Jc1vy6qr8-jR"
            }
            views="48M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/8SbUC-UaAxE?si=LVhwuo2AmHmZVavC"
            }
            views="225M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/a9eNQZbjpJk?si=KG1QnQPcEovxztWN"
            }
            views="104M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/R8OOWcsFj0U?si=O7WO0kqj7AiiDgzS"
            }
            views="121M"
          />
        </div>
      </article>
    </section>
  );
};

export default Media;
