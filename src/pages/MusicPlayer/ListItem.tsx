import { FC } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { ListItemProps } from "../../types/types";

const ListItem: FC<ListItemProps> = ({
  musicList,
  isPlaying,
  currentSong,
  color,
}) => {
  return (
    <ol>
      {musicList.map((item) => (
        <li
          // onClick={() => handleCurrentSong(item.id)}
          onClick={() => playSong(item.id)}
          className={`${
            currentSong === item.id
              ? `${color} hover:bg-black/40`
              : "hover:bg-black/20"
          } music__item-list text-sm p-1 px-4 rounded-md cursor-pointer`}
          key={item.id}
          title={isPlaying ? "Pause Song" : "Play Song"}
        >
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-4 items-center">
              <div className="music__number__container flex justify-center relative w-3">
                <span className="music__number__song opacity-50">
                  {item.id}
                </span>
                <span className="music__number__play-icon absolute top-0 -left-1 text-white text-xl opacity-0">
                  {/* {currentSongItem === item.id ? <FaPause /> : <FaPlay />} */}
                  {currentSong === item.id ? (
                    isPlaying ? (
                      <FaPause />
                    ) : (
                      <FaPlay />
                    )
                  ) : (
                    <FaPlay />
                  )}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{item.title}</p>
                <span className="opacity-50 text-[13px]">Jinjer</span>
              </div>
            </div>
            <span className="opacity-50">{item.duration}</span>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ListItem;
