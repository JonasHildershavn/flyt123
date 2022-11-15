import Link from 'next/link';
import Logo from '../logo/logo';

const Header: React.FC = () => (
  <header className="header">
    <span className='header__logo'>
      FLYT 
    </span>
    <div className ="header__right-container">
      <span className ="header__text">
       <Link href={"ledig-tid/1"}>
          <a> Mine interesser</a>  
       </Link>
      </span>
      <div className = "header__indicator">
              1
       </div>
    </div>
  </header>
);

export default Header;
