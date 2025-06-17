import { useProviderContext } from "../../context/ProviderContext";
import style from "./LeftAside.module.css";
import mixList from "../../common/mixList";
export default function LeftAside() {
  const { onPage } = useProviderContext();

  return (
    <aside className={style.aside}>
      <div className={style.pages}>
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
          <li key={mix}>{mix}</li>
        ))}
      </ul>
      <picture>
        <img
          src="https://i.scdn.co/image/ab67616d00001e0260df033c8f8b17384387666a"
          alt=""
        />
      </picture>
    </aside>
  );
}
