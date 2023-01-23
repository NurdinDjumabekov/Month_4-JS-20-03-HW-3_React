import Foods from "../Foods/Foods";
import ObjectsProductsCss from "./ObjectsProductsCss.module.css";
//фотки
import fudziama from "./ObjectsProductsImgs/fudziama.jpg";
import HotIzumrud from "./ObjectsProductsImgs/HotIzumrud.png";
import Niagara from "./ObjectsProductsImgs/Niagara.png";

function ObjectsProducts() {
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
  ];
  return (
    <div className={ObjectsProductsCss.parent}>
      {foodsInfo.map((item) => (
        <Foods key={item.id} food={item} />
      ))}
    </div>
  );
}

export default ObjectsProducts;
