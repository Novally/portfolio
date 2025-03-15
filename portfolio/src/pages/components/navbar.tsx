// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-img">
        <img></img>
      </div>
      <div className="navbar-navigation">
        <ul className="navbar-list">
          <a><Link href="/">Home</Link></a>
          <a><Link href="/about">About</Link></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
