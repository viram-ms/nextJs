import Link from 'next/link';
import styled from 'styled-components';
const Navbar = () => (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">bitzPrice</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item">
      <Link href="/">
        <a className="nav-link" href="#">Home</a></Link>
      </li>
      <li className="nav-item">
      <Link href="/about">
        <a className="nav-link" href="#">About</a></Link>
      </li>
     
    </ul>
   
  </div>
</nav>
    </div>

);

export default Navbar;