const moviesMock = [
  {
    id: 'eea72a78-72fe-46c3-856f-4370ebc85782',
    title: "Tora-san's Rise and Fall (Otoko wa tsurai yo: Torajiro aiaigasa)",
    year: 1999,
    cover: 'http://dummyimage.com/149x160.bmp/dddddd/000000',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 65,
    contentRating: 'PG-13',
    source: 'http://1und1.de/urna/ut/tellus/nulla/ut/erat.json',
    tags: ['Mystery|Thriller', 'Action|Sci-Fi', 'Comedy|Documentary']
  },
  {
    id: '1fee6cc3-f19c-4825-8a58-69b605406d1f',
    title: 'I Am Dina',
    year: 1992,
    cover: 'http://dummyimage.com/164x213.bmp/5fa2dd/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 40,
    contentRating: 'PG-13',
    source: 'http://163.com/mauris/eget.png',
    tags: [
      'Comedy|Romance',
      'Comedy|Drama|Romance',
      'Horror',
      'Adventure|Children|Comedy',
      'Drama'
    ]
  },
  {
    id: 'c2cad11a-d7a4-47ca-8632-07d40c1be18c',
    title: 'Texas',
    year: 2004,
    cover: 'http://dummyimage.com/199x136.jpg/ff4444/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 33,
    contentRating: 'R',
    source: 'http://dot.gov/sapien/sapien/non/mi/integer.html',
    tags: ['Comedy', 'Drama', 'Horror']
  },
  {
    id: '59efbfe6-1dda-4500-b2c4-e8a3e88fb9c8',
    title: 'Cutter, The',
    year: 1970,
    cover: 'http://dummyimage.com/118x207.jpg/dddddd/000000',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 14,
    contentRating: 'R',
    source: 'https://bigcartel.com/interdum/in/ante/vestibulum.js',
    tags: ['Comedy', 'Drama|IMAX']
  },
  {
    id: '420f4923-c394-4d6f-86ed-0f63cd0ea948',
    title: 'License to Wed',
    year: 1990,
    cover: 'http://dummyimage.com/202x200.png/dddddd/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 39,
    contentRating: 'R',
    source: 'http://skyrock.com/semper/sapien/a/libero/nam.aspx',
    tags: ['Drama', 'Horror|Mystery|Sci-Fi', 'Documentary', 'Drama', 'Drama']
  },
  {
    id: '1bef5d17-944b-456e-b0e6-87586541f732',
    title: 'Goodbye to Language 3D',
    year: 2004,
    cover: 'http://dummyimage.com/244x120.jpg/5fa2dd/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 60,
    contentRating: 'G',
    source: 'http://dropbox.com/sapien/in/sapien.png',
    tags: ['Horror']
  },
  {
    id: '2834f599-42ef-4b14-91eb-b3572dddde03',
    title: 'Blow Dry (a.k.a. Never Better)',
    year: 2010,
    cover: 'http://dummyimage.com/163x120.png/5fa2dd/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 42,
    contentRating: 'G',
    source: 'https://phoca.cz/rhoncus/aliquet.png',
    tags: ['Comedy|Drama|Romance', 'Comedy|Romance', 'Comedy']
  },
  {
    id: '03f96d75-3499-4f12-a33d-6eaa5ee3d5b5',
    title: 'Missing',
    year: 2005,
    cover: 'http://dummyimage.com/137x100.png/cc0000/ffffff',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 53,
    contentRating: 'G',
    source:
      'http://forbes.com/sociis/natoque/penatibus/et/magnis/dis/parturient.json',
    tags: ['Crime|Drama|Film-Noir|Romance|Thriller', 'Documentary']
  },
  {
    id: 'bea00934-d76f-4fe1-8c41-b440bbf9b74d',
    title: 'Speed & Angels',
    year: 1992,
    cover: 'http://dummyimage.com/111x164.bmp/ff4444/ffffff',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 7,
    contentRating: 'PG',
    source: 'http://yandex.ru/rhoncus/dui/vel/sem/sed.png',
    tags: ['Action|Sci-Fi|Thriller', 'Action|Adventure|Sci-Fi', 'Drama|Sci-Fi']
  },
  {
    id: '1ae1800e-12da-444f-b4a4-fb4961071efe',
    title: 'London Boulevard',
    year: 1993,
    cover: 'http://dummyimage.com/148x194.jpg/ff4444/ffffff',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 77,
    contentRating: 'NC-17',
    source: 'https://hexun.com/aliquet/massa.jpg',
    tags: ['Documentary']
  }
];

function filteredMoviesMock(tags) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
