import './Navigation.css';

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="left">
        <img
          className="logo"
          alt="logo"
          src="https://i.pinimg.com/originals/66/f7/72/66f77296282b5ab7c2780724802614c0.png"
        />
      </div>
      <div className="right">
        <ul className="links">
          <li>
            <a>Ana Sayfa</a>
          </li>
          <li>
            <a>Favori</a>
          </li>
          <li>
            <a>Sepetim</a>
          </li>
          <li>
            <a>İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
