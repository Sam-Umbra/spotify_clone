import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftAside from "../../layout/leftAside/LeftAside";
import PlayingSong from "../../layout/playingSong/PlayingSong";
import Top from "../../layout/Top/Top";
import style from "./Search.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className={style.search}>
      <LeftAside />
      <main className={style.main}>
        <Top />
        <div className={style.recent}>
          <span className={style.title}>Recent searches</span>
          <div className={style.card_list}>
            <div className={style.card}>
              <picture className={style.card_photo_container}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg"
                  alt=""
                  className={style.card_photo}
                />
                <FontAwesomeIcon icon={faXmark} className={style.close_card} />
              </picture>
              <span className={style.card_name}>Ed Seeran</span>
              <span className={style.card_type}>Artist</span>
            </div>
            <div className={style.card}>
              <picture className={style.card_photo_container}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg"
                  alt=""
                  className={style.card_photo}
                />
                <FontAwesomeIcon icon={faXmark} className={style.close_card} />
              </picture>
              <span className={style.card_name}>Ed Seeran</span>
              <span className={style.card_type}>Artist</span>
            </div>
            <div className={style.card}>
              <picture className={style.card_photo_container}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg"
                  alt=""
                  className={style.card_photo}
                />
                <FontAwesomeIcon icon={faXmark} className={style.close_card} />
              </picture>
              <span className={style.card_name}>Ed Seeran</span>
              <span className={style.card_type}>Artist</span>
            </div>
          </div>
        </div>
        <div className={style.top_genres}>
          <span className={style.title}>Your top genres</span>
          <div className={style.t_genre_list}>
            <div className={style.t_genre}>
              <span className={style.t_genre_name}>Pop</span>
            </div>
            <div className={style.t_genre}>
              <span className={style.t_genre_name}>Pop</span>
            </div>
            <div className={style.t_genre}>
              <span className={style.t_genre_name}>Pop</span>
            </div>
          </div>
        </div>
        <div className={style.all}>
          <span className={style.title}>Browse all</span>
          <div className={style.genre_list}>
            <div className={style.genre}>
              <span className={style.genre_name}>Podcasts</span>
            </div>
            <div className={style.genre}>
              <span className={style.genre_name}>Podcasts</span>
            </div>
            <div className={style.genre}>
              <span className={style.genre_name}>Podcasts</span>
            </div>
            <div className={style.genre}>
              <span className={style.genre_name}>Podcasts</span>
            </div>
            <div className={style.genre}>
              <span className={style.genre_name}>Podcasts</span>
            </div>
            <div className={style.genre}>
              <span className={style.genre_name}>Podcasts</span>
            </div>
            <div className={style.genre}>
              <span className={style.genre_name}>Podcasts</span>
            </div>
          </div>
        </div>
      </main>
      <PlayingSong />
    </div>
  );
}
