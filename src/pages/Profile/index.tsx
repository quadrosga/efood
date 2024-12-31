import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';

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
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        );
        if (res.ok) {
          const data = await res.json();
          setRestaurant(data);
        } else {
          console.error('Failed to fetch restaurant data');
        }
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
