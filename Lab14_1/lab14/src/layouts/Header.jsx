import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
