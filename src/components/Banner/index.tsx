import { BannerContainer, BannerContent, Infos, Title } from './styles';

type Props = {
  title: string;
  image: string;
  infos: string[];
};

const Banner = ({ title, image, infos }: Props) => (
  <BannerContainer image={image}>
    <BannerContent>
      <div className="container">
        <Infos>{infos.join(' | ')}</Infos>
        <Title>{title}</Title>
      </div>
    </BannerContent>
  </BannerContainer>
);

export default Banner;
