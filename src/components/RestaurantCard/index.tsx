import estrela from '../../assets/images/estrela.png';
import Button from '../Button';
import Tag from '../Tag';
import { Card, Descricao, Image, Infos, Nota, Titulo } from './styles';

type Props = {
  id: number;
  infos: string[];
  image: string;
  title: string;
  score: string;
  description: string;
};

const RestaurantCard = ({
  id,
  title,
  image,
  infos,
  score,
  description,
}: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Descricao>
      <Titulo>
        <h3>{title}</h3>
        <Nota>
          <h3>{score}</h3>
          <img src={estrela} alt="estrela" />
        </Nota>
      </Titulo>
      <p>{description}</p>
      <Button type="link" to={`/profile/${id}`} title="Saiba mais">
        Saiba mais
      </Button>
    </Descricao>
  </Card>
);

export default RestaurantCard;
