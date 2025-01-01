import RestaurantsList from '../../components/RestaurantsList';
import { useGetRestaurantsQuery } from '../../services/api';

export interface MenuItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
  restaurantId: number;
}

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuItem[];
};

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return <RestaurantsList restaurants={restaurants} />;
  }

  return <h4>Loading...</h4>;
};
export default Home;
