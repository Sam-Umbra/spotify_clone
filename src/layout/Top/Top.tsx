import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Top.module.css";
import { useProviderContext } from "../../context/ProviderContext";

export default function Top() {
  const { onPage } = useProviderContext();

  return (
    <div className={style.top}>
      <div className={style.arrows}>
        <FontAwesomeIcon icon={faChevronLeft} className={style.arrow} />
        <FontAwesomeIcon icon={faChevronRight} className={style.arrow} />
        {onPage === "search" ? (
          <div className={style.search_bar}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={style.btn_search} />
            <input type="text" className={style.input} placeholder="Artists, songs, or podcasts" />
          </div>
        ) : undefined}
        {onPage === "library" ? (<>
          <nav className={style.nav}>
            <button className={`${style.btn_nav} ${style.active_btn}`}>Playlist</button>
            <button className={style.btn_nav}>Podcasts</button>
            <button className={style.btn_nav}>Artists</button>
            <button className={style.btn_nav}>Albums</button>
          </nav>
        </>) : undefined}
      </div>
      <div className={style.user}>
        <FontAwesomeIcon icon={faUser} className={style.user_photo} />
        <span>Sam-Umbra</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
}
