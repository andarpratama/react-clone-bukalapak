import bannerImage from '../data/banner-image';
import '../assets/scss/components/banner.scss';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__img'>
        {bannerImage.map(banner => {
          return <img src={require(`../assets/images/${banner}`)} alt='' />;
        })}
      </div>
      <div className='banner__tab'>
        <ul>
          {bannerImage.map((banner, index) => {
            if (index === 2) {
              return (
                <li>
                  <button className='active'></button>
                </li>
              );
            }
            return (
              <li>
                <button></button>
              </li>
            );
          })}
        </ul>

        <button>Semua Promo</button>
      </div>
    </div>
  );
};

export default Banner;
