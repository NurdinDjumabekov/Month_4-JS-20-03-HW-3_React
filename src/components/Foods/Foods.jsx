import FoodImgs from "./Foods_img/Niagara.png";
import FoodCss from "./Foods.module.css";

function Foods(product) {
  return (
    <>
      <div className={FoodCss.parent_foods}>
        <div className={FoodCss.food_imgs}>
          <img src={product.food.url} alt="food" />
        </div>
        <div className={FoodCss.food_info}>
          <span>{product.food.name}</span>
          <span className={FoodCss.massa}>Вес : {product.food.mass}</span>
          <p>{product.food.price}</p>
          <button>Заказать</button>
        </div>
      </div>
    </>
  );
}

export default Foods;
