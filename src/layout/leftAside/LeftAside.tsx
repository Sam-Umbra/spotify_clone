import { useProviderContext } from "../../context/ProviderContext";
import style from "./LeftAside.module.css";
import mixList from "../../common/mixList";
import { Link } from "react-router-dom";
export default function LeftAside() {
  const { onPage } = useProviderContext();

  return (
    <aside className={style.aside}>
      <div className={style.pages}>
        <Link to={"/"} className={style.link}>
          <div className={style.page}>
            {onPage === "home" ? (
              <img src="./images/home_on.png" alt="Home-Icon-On" />
            ) : (
              <img src="./images/home_off.png" alt="Home-Icon-Off" />
            )}
            <span className={onPage === "home" ? style.isOnPage : undefined}>
              Home
            </span>
          </div>
        </Link>

        <Link to={"/search"} className={style.link}>
          <div className={style.page}>
            {onPage === "search" ? (
              <img src="./images/search_on.png" alt="Search-Icon-On" />
            ) : (
              <img src="./images/search_off.png" alt="Search-Icon-Off" />
            )}
            <span className={onPage === "search" ? style.isOnPage : undefined}>
              Search
            </span>
          </div>
        </Link>

        <Link to={"/library"} className={style.link}>
          <div className={style.page}>
            {onPage === "library" ? (
              <img src="./images/library_on.png" alt="Library-Icon-On" />
            ) : (
              <img src="./images/library_off.png" alt="Library-Icon-Off" />
            )}
            <span className={onPage === "library" ? style.isOnPage : undefined}>
              Library
            </span>
          </div>
        </Link>
      </div>
      <div className={style.playlist}>
        <div className={style.list}>
          <img src="./images/playlist.png" alt="Create-Playlist-Icon" />
          <span>Create Playlist</span>
        </div>
        <div className={style.list}>
          <img src="./images/liked_songs.png" alt="Liked-Songs-Icon" />
          <span className={style.isOnPage}>Liked Songs</span>
        </div>
      </div>
      <ul className={style.mixes}>
        {mixList.map((mix: string) => (
          <Link to={"/mix"} className={style.mixes_links}>
            <li key={mix}>{mix}</li>
          </Link>
        ))}
      </ul>
      <picture>
        <img
          src="https://www.teachhub.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School.png"
          alt=""
        />
      </picture>
    </aside>
  );
}
