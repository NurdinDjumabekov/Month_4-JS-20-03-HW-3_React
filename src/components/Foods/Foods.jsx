import { useState } from "react";
import FoodCss from "./Foods.module.css";

function Foods(product) {
  // const [count, SetCount] = useState(1);
  const addBacket = (event) => {
    console.log(event.target);
    console.log("Код товара " + product.food.id);
    console.log(product.food.name);
    console.log(product.food.price);
    console.log(product.food.mass);
    // console.log(product.food.url);
    ////////////////////////////////////////////////////
    // i = i + 1;
    // console.log(i);
    SetCount((count) => count + 1);
    console.log(count);
    alert(`
      Вы заказали : ${product.food.name}
      по цене : ${product.food.price}
      `);
  };

  return (
    <>
      <div className={FoodCss.parent_foods}>
        <div className={FoodCss.food_imgs}>
          <img src={product.food.url} alt="food" />
        </div>
        <div className={FoodCss.food_info}>
          <span>{product.food.name}</span>
          <span className={FoodCss.massa}>Bec {product.food.mass}</span>
          <p>{product.food.price}</p>
          <button onClick={addBacket}>Заказать</button>
        </div>
      </div>
    </>
  );
}

export default Foods;
