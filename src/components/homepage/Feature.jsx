import '../../assets/scss/components/features.scss';
import { featureData } from '../../data/feature-data';

const Features = () => {
  return (
    <div className='features'>
      <h2>E-voucher, Tiket, & Investasi</h2>
      <div className='row'>
        {featureData.map(feature => {
          return (
            <div className='col-3'>
              <div className='features__child'>
                <a href='/'>
                  <img
                    src={require(`../../assets/images/${feature.image}`)}
                    alt='Gambar'
                  />
                  <span>Supper Seller</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
