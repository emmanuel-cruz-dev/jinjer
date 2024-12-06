const VideoCard = ({ video, title, paragraph, views }) => {
  return (
    <div className="flex justify-center flex-col gap-4 border border-slate-500 p-5">
      <iframe
        className="grow w-full md:w-72 xl:w-80"
        width="320"
        height="220"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen="true"
      ></iframe>
      <div className="flex flex-col gap-3 tracking-wide">
        <a
          href="#"
          className="uppercase font-bold text-lg line-clamp-1 hover:text-slate-400 transition-colors duration-300"
        >
          {title}
        </a>
        <p className="text-slate-400 line-clamp-3">{paragraph}</p>
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
            title="AC/DC - Thunderstruck"
            paragraph="The Razors Edge is an album by Australian hard rock band AC/DC. It was the band's eleventh internationally released studio album and the twelfth to be released in Australia. The Razors Edge features hits Thunderstruck and Are You Ready, which reached #5 and #16 respectively on Billboard's Mainstream Rock Tracks Chart and Moneytalks, which peaked at #23 on the Billboard Hot 100. The album went Multi-Platinum and reached the US Top Ten."
            views="339M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/JU5LMG3WFBw?si=fVPXj-FKsBl3RFpx"
            }
            title="Queen - Hammer to Fall"
            paragraph="Hammer to Fall is a 1984 song by the British rock band Queen. Written by guitarist Brian May, the song is the eighth track on their 1984 album The Works.[4] It was the fourth and final single to be released from that album, although the single version was edited down by thirty seconds from the version on the album."
            views="28M"
          />

          <VideoCard
            video={
              "https://www.youtube.com/embed/8SbUC-UaAxE?si=LVhwuo2AmHmZVavC"
            }
            title="Guns N' Roses - November Rain"
            paragraph="Official Music Video for November Rain performed by Guns N' Roses from their third studio album, 'Use Your Illusion I.' Featured in Thor: Love and Thunder."
            views="225M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/a9eNQZbjpJk?si=KG1QnQPcEovxztWN"
            }
            title="Red Hot Chili Peppers - Around The World"
            paragraph="Around the World is a song by American rock band Red Hot Chili Peppers, appearing as the opening track on their seventh studio album Californication (1999). The song was released as the album's second single on August 23, 1999. The single peaked at number seven on the Billboard Modern Rock Tracks chart and number 16 on the Mainstream Rock Tracks chart."
            views="104M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/t365MuktYQs?si=APy6Jc1vy6qr8-jR"
            }
            title="David Bowie - Starman"
            paragraph="The official video for Starman by David Bowie, featuring footage from the Ziggy Stardust tour shot in the UK during 1972 and 1973. Filmed by late Bowie collaborator, photographer Mick Rock, the footage features the album version of Starman as its soundtrack."
            views="48M"
          />
          <VideoCard
            video={
              "https://www.youtube.com/embed/R8OOWcsFj0U?si=O7WO0kqj7AiiDgzS"
            }
            title="Muse - Undisclosed Desires"
            paragraph="Undisclosed Desires is a song by English rock band Muse. It was released as the second single from their fifth studio album, The Resistance, on 16 November 2009."
            views="121M"
          />
        </div>
      </article>
    </section>
  );
};

export default Media;
