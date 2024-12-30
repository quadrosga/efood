import RestaurantsList from '../../components/RestaurantsList';
import Restaurant from '../../models/Restaurants';
import sushi from '../../assets/images/sushi.jpg';
import shrimp from '../../assets/images/camarao.png';
import pizza from '../../assets/images/pizza.jpg';
import burger from '../../assets/images/burger.jpg';

export const allRestaurants = [
  new Restaurant(
    1,
    ['Destaque da semana', 'Japonesa'],
    sushi,
    'Hioki Sushi',
    '4.9',
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  ),
  new Restaurant(
    2,
    ['Italiana'],
    pizza,
    'Pizzaria Bella Italia',
    '4.6',
    'Autênticas pizzas italianas preparadas no forno a lenha. Preços irresistíveis. Peça já! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  ),
  new Restaurant(
    3,
    ['Italiana'],
    shrimp,
    'La Dolce Vita Trattoria',
    '4.7',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  ),
  new Restaurant(
    4,
    ['Americana'],
    burger,
    'Burgers & Co.',
    '4.5',
    'Os hambúrgueres mais suculentos da cidade, com acompanhamentos irresistíveis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  ),
  new Restaurant(
    5,
    ['Italiana'],
    shrimp,
    'La Dolce Vita Trattoria',
    '4.7',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  ),
  new Restaurant(
    6,
    ['Italiana'],
    shrimp,
    'La Dolce Vita Trattoria',
    '4.7',
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  ),
];

const Home = () => {
  return <RestaurantsList restaurants={allRestaurants} />;
};
export default Home;
