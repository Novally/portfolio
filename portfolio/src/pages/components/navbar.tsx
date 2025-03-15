// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="">
          <ul className="navbar-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
