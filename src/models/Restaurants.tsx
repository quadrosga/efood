class Restaurant {
  id: number;
  infos: string[];
  image: string;
  name: string;
  score: string;
  description: string;

  constructor(
    id: number,
    infos: string[],
    image: string,
    name: string,
    score: string,
    description: string
  ) {
    this.id = id;
    this.infos = infos;
    this.image = image;
    this.name = name;
    this.score = score;
    this.description = description;
  }
}

export default Restaurant;
