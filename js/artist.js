const infoArtist = [
  {
    img: 'img/artist/boywithuke-removebg-preview.png',
    imgAlt: 'image of boyWithUke',
    pattern: 'img/artist/swirl_pattern.webp',
    patternAlt: 'img/artist/swirl_pattern.webp',
    name: 'BoyWithUke',
    genre: 'indie, hip-hop/rap',
    music: '"understand", "toxic", "two moons" and many more.',
  },
  {
    img: 'img/artist/blackbear-removebg-preview.png',
    imgAlt: 'image of blackbear',
    pattern: 'img/artist/swirl_pattern.webp',
    patternAlt: 'img/artist/swirl_pattern.webp',
    name: 'Blackbear',
    genre: 'urban music, pop',
    music: '“idfc”, “me & ur ghost” and “hot girl bummer”.',
  },
  {
    img: 'img/artist/doja_cat-removebg-preview.png',
    imgAlt: 'image of doja cat',
    pattern: 'img/artist/swirl_pattern.webp',
    patternAlt: 'img/artist/swirl_pattern.webp',
    name: 'Doja Cat',
    genre: 'Pop R&B Hip hop Pop rap',
    music: '"Say So", "Juicy", "Like That", "Kiss Me More".',
  },
  {
    img: 'img/artist/paulolondra-removebg-preview.png',
    imgAlt: 'image of Paulo Londra',
    pattern: 'img/artist/swirl_pattern.webp',
    patternAlt: 'img/artist/swirl_pattern.webp',
    name: 'Paulo Londra',
    genre: '"trap", "urban", "freestyle", "rap"',
    music: '"plan A", "yo no se", "no puedo" and many more.',
  },
  {
    img: 'img/artist/postmalone-removebg-preview.png',
    imgAlt: 'image of post malone',
    pattern: 'img/artist/swirl_pattern.webp',
    patternAlt: 'img/artist/swirl_pattern.webp',
    name: 'Post malone',
    genre: 'Hip-hop/rap',
    music: '“sunflower”, “congratulations” and “circles.”',
  },
  {
    img: 'img/artist/subruban-removebg-preview.png',
    imgAlt: 'image of sub Urbam',
    pattern: 'img/artist/swirl_pattern.webp',
    patternAlt: 'img/artist/swirl_pattern.webp',
    name: 'Sub urban',
    genre: 'pop, Pop indie, Electrónica',
    music: '"cradles", "inferno", "freak" and many more.',
  },
];

const cardWrapper = document.querySelector('.card-wrapper');
const createCard = (artist) => {
  // creating the card of the artist
  const artistCard = document.createElement('div');
  artistCard.classList.add('card-artist');

  // portrait
  const portrait = document.createElement('img');
  portrait.setAttribute('src', artist.img);
  portrait.setAttribute('alt', artist.imgAlt);
  artistCard.appendChild(portrait);

  // pattern of the image
  const pattern = document.createElement('img');
  pattern.setAttribute('src', artist.pattern);
  pattern.setAttribute('alt', artist.patternAlt);
  artistCard.appendChild(pattern);

  // create content container
  const divContainer = document.createElement('div');
  divContainer.classList.add('card-content');
  
  // name of artist
  const name = document.createElement('h2');
  name.classList.add('content-h2');
  name.textContent = artist.name;
  divContainer.appendChild(name);

  // genre of artist
  const genre = document.createElement('h3');
  genre.classList.add('genre');
  genre.textContent = `genre : ${artist.genre}`;
  divContainer.appendChild(genre);

  // music of artist
  const music = document.createElement('p');
  music.textContent = `${artist.name} will be platying: ${artist.music}`;
  divContainer.appendChild(music);

  artistCard.appendChild(divContainer);
  cardWrapper.appendChild(artistCard);
};

infoArtist.forEach((artist) => {
  createCard(artist);
});