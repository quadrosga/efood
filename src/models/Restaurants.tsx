class Restaurant {
  id: number;
  infos: string[];
  image: string;
  title: string;
  score: string;
  description: string;

  constructor(
    id: number,
    infos: string[],
    image: string,
    title: string,
    score: string,
    description: string
  ) {
    this.id = id;
    this.infos = infos;
    this.image = image;
    this.title = title;
    this.score = score;
    this.description = description;
  }
}

export default Restaurant;
