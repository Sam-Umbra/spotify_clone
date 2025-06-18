// Definindo a interface PlaylistItem
export interface PlaylistItem {
  id: number;
  titulo: string;
  artista: string;
  album: string;
  duracao: string;
  capa: string;
}

// Definindo a lista de músicas
export const playlist: PlaylistItem[] = [
  {
    id: 1,
    titulo: 'Falling Away From Me',
    artista: 'Korn',
    album: 'Issues',
    duracao: '04:30',
    capa: 'https://i.ibb.co/YT0RspTh/Issues.png',
  },
  {
    id: 2,
    titulo: 'Numb',
    artista: 'Linkin Park',
    album: 'Meteora',
    duracao: '03:07',
    capa: 'https://i.ibb.co/SDKkCDKJ/Meteora.png',
  },
  {
    id: 3,
    titulo: 'Bring Me To Life',
    artista: 'Evanescence',
    album: 'Fallen',
    duracao: '03:55',
    capa: 'https://i.ibb.co/8nvCxBN7/Fallen.png',
  },
  {
    id: 4,
    titulo: 'Truth',
    artista: 'Seether',
    album: 'Karma and Effect',
    duracao: '03:50',
    capa: 'https://i.ibb.co/whXys8j0/Karma-and-Effect.png',
  },
  {
    id: 5,
    titulo: 'Animal I Have Become',
    artista: 'Three Days Grace',
    album: 'One-X',
    duracao: '03:51',
    capa: 'https://i.ibb.co/tpRjm5LM/One-X.png',
  },
  {
    id: 6,
    titulo: 'Chop Suey!',
    artista: 'System Of A Down',
    album: 'Toxicity',
    duracao: '03:30',
    capa: 'https://i.ibb.co/Lzk7FNk5/Toxicity.png',
  },
];

export default playlist;
