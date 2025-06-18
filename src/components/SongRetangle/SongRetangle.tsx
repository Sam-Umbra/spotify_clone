import style from "./SongRetangle.module.css";

interface SongProps {
  id: number;
  titulo: string;
  artista: string;
  album: string;
  duracao: string;
  capa: string;
}

export default function SongRetangle({
  id,
  titulo,
  artista,
  album,
  duracao,
  capa,
}: SongProps) {
  return (
    <div className={style.song_retangle}>
      <div className={style.title}>
        <span className={style.id}>{id}</span>
        <figure className={style.figure}>
          <img src={capa} alt={titulo} className={style.img} />
        </figure>
        <div className={style.text}>
          <span className={style.name}>{titulo}</span>
          <span className={style.singer}>{artista}</span>
        </div>
      </div>
      <p className={style.album}>{album}</p>
      <p className={style.date}></p>
      <p className={style.time}>{duracao}</p>
    </div>
  );
}