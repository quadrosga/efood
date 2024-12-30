import { useParams } from 'react-router';
import Banner from '../../components/Banner';
// import ProductsList from '../../components/ProductsList';
import { allRestaurants } from '../Home';

const Profile = () => {
  const { id } = useParams();
  const restaurant = allRestaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <Banner
        title={restaurant.title}
        image={restaurant.image}
        infos={restaurant.infos}
      />
    </div>
  );
};

export default Profile;
