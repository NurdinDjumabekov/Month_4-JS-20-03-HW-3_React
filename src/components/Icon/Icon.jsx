import { useState } from "react";
import IconCss from "./Icon.module.css";

function Icon() {
  const [isChecked, setChecked] = useState(false);
  const handleonChange = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <div className={IconCss.iconParent}>
        <div className={IconCss.icon_child}>
          <div>
            <div>
              <input
                type="text"
                className={IconCss.inputName}
                disabled={isChecked}
                placeholder="Введите имя"
              />
            </div>
            <div>
              <input
                type="text"
                className={IconCss.inputName}
                disabled={isChecked}
                placeholder="Введите свою фамилию"
              />
            </div>
          </div>
          {/* //////////// */}
          <div>
            <div className={IconCss.if_site}>
              <span> вы соглашаетесь с нашими условиями? . </span>
              <input
                type="checkbox"
                className={IconCss.checkBox}
                value="panner"
                checked={isChecked}
                onChange={handleonChange}
              />
            </div>
          </div>
          <button className={IconCss.btn} disabled={!isChecked}>
            отправить
          </button>
        </div>
      </div>
    </>
  );
}

export default Icon;
