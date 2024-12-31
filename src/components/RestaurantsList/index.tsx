import { Restaurant } from '../../pages/Home';
import { List } from './styles';
import RestaurantCard from '../RestaurantCard';

export type Props = {
  restaurants: Restaurant[];
};

const RestaurantsList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = [];

    if (restaurant.destacado) {
      tags.push('destaque da semana');
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo);
    }

    return tags;
  };
  return (
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            infos={getRestaurantTags(restaurant)}
            image={restaurant.capa}
            title={restaurant.titulo}
            score={restaurant.avaliacao.toString()}
            description={restaurant.descricao}
            id={restaurant.id}
          />
        ))}
      </List>
    </div>
  );
};

export default RestaurantsList;
