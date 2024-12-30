import Restaurant from '../../models/Restaurants';
import { List } from './styles';
import RestaurantCard from '../RestaurantCard';

export type Props = {
  restaurants: Restaurant[];
};

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          infos={restaurant.infos}
          image={restaurant.image}
          title={restaurant.title}
          score={restaurant.score}
          description={restaurant.description}
          id={restaurant.id}
        />
      ))}
    </List>
  </div>
);

export default RestaurantsList;
