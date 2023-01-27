import MenuCss from "./Menu.module.css";

function Menu({ onSearch }) {
  return (
    <>
      <div className={MenuCss.parent_nav}>
        <div className={MenuCss.nav}>
          <span>
            <a href="">Wasabi</a>
          </span>
          <div className={MenuCss.nav_search}>
            <input type="text" placeholder="Поиск" onChange={onSearch} />
            <button>Поиск</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
