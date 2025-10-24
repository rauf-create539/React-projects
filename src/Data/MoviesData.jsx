const MoviesData = [
  {
    title: "Inception",
    description: "A skilled thief enters dreams to steal secrets but faces a mission to plant an idea instead.",
    releaseDate: "2010-07-16",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    releaseDate: "2008-07-18",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Interstellar",
    description: "Explorers travel through a wormhole to find a new home for humanity.",
    releaseDate: "2014-11-07",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    title: "Parasite",
    description: "A poor family infiltrates a wealthy household with unexpected consequences.",
    releaseDate: "2019-05-30",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    title: "The Matrix",
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    releaseDate: "1999-03-31",
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    title: "Fight Club",
    description: "An insomniac and a soap salesman form an underground fight club with shocking results.",
    releaseDate: "1999-10-15",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  },
  {
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over years, finding solace and redemption through acts of decency.",
    releaseDate: "1994-09-22",
    rating: 9.3,
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    title: "The Godfather",
    description: "The aging patriarch of a crime dynasty transfers control to his reluctant son.",
    releaseDate: "1972-03-24",
    rating: 9.2,
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    title: "The Prestige",
    description: "Rival magicians engage in a bitter competition to create the ultimate illusion.",
    releaseDate: "2006-10-20",
    rating: 8.5,
    image: "/Images/prestige.jpg"
  },
  {
    title: "Avengers: Endgame",
    description: "Earth’s mightiest heroes unite for one final stand against Thanos.",
    releaseDate: "2019-04-26",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    title: "Whiplash",
    description: "A young drummer pushes his limits under a ruthless music instructor.",
    releaseDate: "2014-10-10",
    rating: 8.5,
    image: "/Images/whiplash.jpg"
  },
  {
    title: "The Social Network",
    description: "The story of how Facebook was founded and the personal betrayals behind it.",
    releaseDate: "2010-10-01",
    rating: 7.8,
    image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg"
  },
  {
    title: "Joker",
    description: "A failed comedian’s descent into madness gives rise to Gotham’s infamous villain.",
    releaseDate: "2019-10-04",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    title: "Get Out",
    description: "A young Black man visits his white girlfriend’s family, uncovering a disturbing secret.",
    releaseDate: "2017-02-24",
    rating: 7.7,
    image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"
  },
  {
    title: "Dune: Part One",
    description: "A noble family becomes entangled in a battle for control over a desert planet rich in valuable spice.",
    releaseDate: "2021-10-22",
    rating: 8.0,
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
  },
  // New 16 movies
  {
    title: "Oppenheimer",
    description: "The story of J. Robert Oppenheimer and his role in the creation of the atomic bomb.",
    releaseDate: "2023-07-21",
    rating: 8.6,
    image: "/Images/Oppenheimer_(film).jpg"
  },
  {
    title: "The Batman",
    description: "Batman uncovers corruption in Gotham City that connects to his own family.",
    releaseDate: "2022-03-04",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  },
  {
    title: "Spider-Man: No Way Home",
    description: "Peter Parker faces multiversal chaos when a spell goes wrong.",
    releaseDate: "2021-12-17",
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
  },
  {
    title: "Tenet",
    description: "A secret agent manipulates time to prevent World War III.",
    releaseDate: "2020-09-03",
    rating: 7.4,
    image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
  },
  {
    title: "Everything Everywhere All at Once",
    description: "A woman is swept up in a multiverse adventure where she alone can save existence.",
    releaseDate: "2022-03-11",
    rating: 8.0,
    image: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
  },
  {
    title: "The Wolf of Wall Street",
    description: "A stockbroker rises to wealth and corruption in the world of Wall Street excess.",
    releaseDate: "2013-12-25",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg"
  },
  {
    title: "Mad Max: Fury Road",
    description: "In a post-apocalyptic desert, Max teams up with Furiosa to flee a tyrant.",
    releaseDate: "2015-05-15",
    rating: 8.1,
    image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
  },
  {
    title: "Blade Runner 2049",
    description: "A young blade runner uncovers a secret that could change society forever.",
    releaseDate: "2017-10-06",
    rating: 8.0,
    image: "/Images/bladerunner.jpg"
  },
  {
    title: "Her",
    description: "A lonely man develops an emotional relationship with an intelligent operating system.",
    releaseDate: "2013-12-18",
    rating: 8.0,
    image: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg"
  },
  {
    title: "The Revenant",
    description: "A frontiersman fights for survival after being mauled by a bear and left for dead.",
    releaseDate: "2015-12-25",
    rating: 8.0,
    image: "/Images/revenant_584x800_6d98d1b6.jpeg"
  },
  {
    title: "1917",
    description: "Two soldiers race against time to deliver a message that could save hundreds.",
    releaseDate: "2019-12-25",
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg"
  },
  {
    title: "A Quiet Place",
    description: "A family struggles to survive in a world inhabited by sound-sensitive monsters.",
    releaseDate: "2018-04-06",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
  },
  {
    title: "The Grand Budapest Hotel",
    description: "A legendary concierge and his protégé become entangled in the theft of a priceless painting.",
    releaseDate: "2014-03-28",
    rating: 8.1,
    image: "/Images/grandbudapest.jpg"
  },
  {
    title: "Shutter Island",
    description: "A U.S. Marshal investigates a psychiatric facility and uncovers shocking secrets.",
    releaseDate: "2010-02-19",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg"
  },
  {
    title: "Se7en",
    description: "Two detectives hunt a serial killer who uses the seven deadly sins as motives.",
    releaseDate: "1995-09-22",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg"
  },
  {
    title: "The Silence of the Lambs",
    description: "A young FBI trainee seeks help from a brilliant but insane killer to catch another murderer.",
    releaseDate: "1991-02-14",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg"
  },
  {
    title: "The Green Mile",
    description: "A prison guard discovers one inmate has a miraculous gift that defies belief.",
    releaseDate: "1999-12-10",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg"
  }
];

export default MoviesData;
