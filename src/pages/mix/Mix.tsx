import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftAside from "../../layout/leftAside/LeftAside";
import PlayingSong from "../../layout/playingSong/PlayingSong";
import Top from "../../layout/Top/Top";
import style from "./Mix.module.css";
import {
  faCaretDown,
  faCirclePlay,
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleDown,
  faClock,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import SongRetangle from "../../components/SongRetangle/SongRetangle";
import playlist from "../../common/songList";
import { useEffect, useState } from "react";

export default function Mix() {
  const [duration, setDuration] = useState<string>("");
  const [totalSongs, setTotalSongs] = useState<number>(0);

  const convertToSeconds = (duracao: string): number => {
    const [minutes, seconds] = duracao.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  useEffect(() => {
    const totalSeconds = playlist.reduce(
      (total, song) => total + convertToSeconds(song.duracao),
      0
    );

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const formatted = `${hours}hr ${minutes}min`;

    setDuration(formatted);
    setTotalSongs(playlist.length);
  }, [playlist]);

  return (
    <div className={style.mix}>
      <LeftAside />
      <main className={style.main}>
        <Top />
        <div className={style.mix_cover}>
          <figure className={style.album_container}>
            <img
              src="https://static01.nyt.com/images/2024/07/09/arts/09amplifier/09amplifier-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
              className={style.album_cover}
            />
            <figcaption className={style.album_caption}>Chill Mix</figcaption>
          </figure>
          <div className={style.playlist_informations}>
            <span className={style.playlist_type}>Public Playlist</span>
            <h1 className={style.album_name}>Chill Mix</h1>
            <p className={style.album_singers}>
              Julia Wolf, Khalid, ayokay and more
            </p>
            <p className={style.informations}>
              Made for <span className={style.author}>dave &#x2022;</span>{" "}
              {totalSongs} songs, {duration}
            </p>
          </div>
        </div>
        <div className={style.playlist}>
          <div className={style.top}>
            <div className={style.left}>
              <FontAwesomeIcon
                icon={faCirclePlay}
                className={`${style.left_icon} ${style.play}`}
              />
              <FontAwesomeIcon icon={faHeart} className={style.left_icon} />
              <FontAwesomeIcon
                icon={faCircleDown}
                className={style.left_icon}
              />
              <FontAwesomeIcon icon={faEllipsis} className={style.left_icon} />
            </div>
            <div className={style.right}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>
                Custom order <FontAwesomeIcon icon={faCaretDown} />
              </p>
            </div>
          </div>
          <div className={style.list}>
            <div className={style.list_header}>
              <p># Title</p>
              <p>Album</p>
              <p>Date Added</p>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className={style.list_main}>
              {playlist.map((song) => (
                <SongRetangle
                  key={song.id}
                  id={song.id}
                  titulo={song.titulo}
                  artista={song.artista}
                  album={song.album}
                  duracao={song.duracao}
                  capa={song.capa}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <PlayingSong />
    </div>
  );
}
