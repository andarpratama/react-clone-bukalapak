import Logo from '../assets/images/bukalapak-logo.png';
import '../assets/scss/components/headers.scss';
import {
  CartIcon,
  HumbergerIcon,
  LoginIcon,
  SearchIcon,
} from '../assets/icons/icons';

const Header = () => {
  return (
    <>
      <header>
        <nav className='nav'>
          <div className='nav__left'>
            <button>
              <HumbergerIcon />
            </button>
            <img src={Logo} alt='Logo Bukalapak' />
          </div>
          <div className='nav__right'>
            <button>
              <SearchIcon />
            </button>
            <button>
              <LoginIcon />
            </button>
            <button>
              <CartIcon />
            </button>
          </div>
        </nav>
      </header>
      <div className='baseplate'>
        <ul>
          <li>
            <a href='/' className='active'>
              Home
            </a>
          </li>
          <li>
            <a href='/'>Feed</a>
          </li>
          <li>
            <a href='/'>BukaMall</a>
          </li>
          <li>
            <a href='/'>BukaReview</a>
          </li>
          <li>
            <a href='/'>Mulai Jualan</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
