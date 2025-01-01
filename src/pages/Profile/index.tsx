import { useParams } from 'react-router';
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';
import { useGetRestaurantQuery } from '../../services/api';
import { MenuItem } from '../Home';

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
    return <div>Loading...</div>;
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
