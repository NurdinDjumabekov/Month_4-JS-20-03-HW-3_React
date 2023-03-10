import { useState } from "react";
// import Foods from "../Foods/Foods";
import ObjectsProductsCss from "./ObjectsProductsCss.module.css";
//фотки
import HotIzumrud from "./ObjectsProductsImgs/HotIzumrud.png";
import Niagara from "./ObjectsProductsImgs/Niagara.png";

function ObjectsProducts({ value }) {
  const [count, Setcount] = useState(0);
  const increment = () => {
    Setcount(count + 1);
  };
  /* //////////////////////// */

  const foodsInfo = [
    {
      id: 1,
      name: "Норвежский",
      price: "310 coм",
      mass: "250 грамм",
      url: "https://sushivesla.kg/assets/images/products/30/small/52594f15cbefdbfb6b59927ce86b8e2f.png",
    },
    {
      id: 2,
      name: "Чиз угорь",
      price: "430 coм",
      mass: "250 грамм",
      url: " https://sushivesla.kg/assets/images/products/85/small/thumb-270-goods-photo-big-removebg-preview.png",
    },
    {
      id: 3,
      name: "Спайси краб",
      price: "380 coм",
      mass: "200 грамм",
      url: "https://sushivesla.kg/assets/images/products/42/small/1-17.png",
    },
    {
      id: 4,
      name: "Спайси тунец",
      price: "290 coм",
      mass: "250 грамм",
      url: "https://sushivesla.kg/assets/images/products/43/small/1123-maguro-karami.png",
    },
    {
      id: 5,
      name: "Калифорния с лососем",
      price: "310 coм",
      mass: "400 грамм",
      url: "https://sushivesla.kg/assets/images/products/26/small/thumb-42-goods-photo-big-removebg-preview.png",
    },
    {
      id: 6,
      name: "Филадельфия классик",
      price: "410 coм",
      mass: "250 грамм",
      url: "https://sushivesla.kg/assets/images/products/27/small/thumb-40-goods-photo-big-removebg-preview.png",
    },

    {
      id: 7,
      name: "Ниагара",
      price: "385 coм",
      mass: "240 грамм",
      url: Niagara,
    },
    {
      id: 8,
      name: "Хот изумруд",
      price: "310 coм",
      mass: "250 грамм",
      url: HotIzumrud,
    },
    {
      id: 9,
      name: "Спайси краб",
      price: "380 coм",
      mass: "200 грамм",
      url: "https://sushivesla.kg/assets/images/products/42/small/1-17.png",
    },
    {
      id: 10,
      name: "Спайси тунец",
      price: "290 coм",
      mass: "250 грамм",
      url: "https://sushivesla.kg/assets/images/products/43/small/1123-maguro-karami.png",
    },
  ];
  return (
    <>
      {/* <h1>{value}</h1> */}
      <div className={ObjectsProductsCss.parent}>
        {foodsInfo.map((item) => (
          <div>
            <div className={ObjectsProductsCss.parent_foods}>
              <div className={ObjectsProductsCss.food_imgs}>
                <img src={item.url} alt="food" />
              </div>
              <div className={ObjectsProductsCss.food_info}>
                <span>{item.name}</span>
                <span className={ObjectsProductsCss.massa}>
                  Bec {item.mass}
                </span>
                <p>{item.price}</p>
                <button
                  onClick={() => {
                    alert(`
                        Вы заказали : ${item.name}
                        по цене : ${item.price}`);
                    increment();
                  }}
                >
                  Заказать
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* {foodsInfo.filter((i) => {
          if (i.name === value) {
            <div className={ObjectsProductsCss.parent_foods}></div>;
          } else {
            <div className={ObjectsProductsCss.nnn}></div>;
          }
        })} */}
      </div>
      {/* //////////////////////// */}
      <div className={ObjectsProductsCss.ParentBacket}>
        <div>
          <a href="">
            <img
              className={ObjectsProductsCss.Backet}
              src="data:image/png;base64,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"
              alt="Корзина"
            />
          </a>
        </div>
        <span className={ObjectsProductsCss.BacketText}>{count}</span>
      </div>
    </>
  );
}

export default ObjectsProducts;
