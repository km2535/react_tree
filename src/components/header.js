import React, { useCallback, useState } from "react";
import { IonIcon } from "react-ion-icon";
import Content from "./content";
import Sidebar from "./sidebar";

const Header = () => {
  const [menuToggle, setClassName] = useState(false);
  const [dayNight, setdayNight] = useState(false);

  const btnEvent1 = useCallback(() => {
    setClassName((prev) => !prev);
  }, []);
  const btnEvent2 = () => {
    setdayNight((prev) => !prev);
  };

  return (
    <>
      <header className={dayNight ? "active" : ""}>
        <span className="logo">Logo</span>
        <div className="rightSide">
          <div
            className={dayNight ? "btns dayNight active" : "btns dayNight "}
            onClick={btnEvent2}
          >
            <IonIcon name="sunny-outline" className="ionicon"></IonIcon>
            <IonIcon name="moon-outline" className="ionicon"></IonIcon>
          </div>
          <div
            className={menuToggle ? "menuToggle active" : "menuToggle"}
            onClick={btnEvent1}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <Content eventAction={dayNight} />
      <Sidebar eventAction={menuToggle} />
    </>
  );
};

export default Header;
