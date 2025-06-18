import MixBlock from "../../components/MixBlock/MixBlock";
import LeftAside from "../../layout/leftAside/LeftAside";
import PlayingSong from "../../layout/playingSong/PlayingSong";
import Top from "../../layout/Top/Top";
import style from "./Library.module.css";

export default function Library() {
  return (
    <div className={style.library}>
      <LeftAside />
      <main className={style.main}>
        <Top />
        <section className={style.section}>
            <span className={style.title}>Playlists</span>
          <div className={style.list}>
              <div className={style.retangle}></div>
              <MixBlock />
              <MixBlock />
              <MixBlock />
              <MixBlock />
              <MixBlock />
              <MixBlock />
              <MixBlock />
              <MixBlock />
          </div>
        </section>
      </main>
      <PlayingSong />
    </div>
  );
}
