import { useParams } from 'react-router';
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';
import { allRestaurants } from '../Home';
import { products } from '../../productsData';

const Profile = () => {
  const { id } = useParams();
  const restaurant = allRestaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const restaurantProducts = products[restaurant.id];

  return (
    <div>
      <Banner
        title={restaurant.title}
        image={restaurant.image}
        infos={restaurant.infos}
      />
      <ProductsList products={restaurantProducts} />
    </div>
  );
};

export default Profile;
