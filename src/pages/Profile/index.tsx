import { useParams } from 'react-router';
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';
import { useGetRestaurantQuery } from '../../services/api';

export interface MenuItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
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

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const { data: restaurant } = useGetRestaurantQuery(id!);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <Banner
        title={restaurant.titulo}
        image={restaurant.capa}
        infos={[
          restaurant.tipo,
          restaurant.destacado ? 'destaque da semana' : '',
        ]}
      />
      <ProductsList products={restaurant.cardapio} />
    </div>
  );
};

export default Profile;
