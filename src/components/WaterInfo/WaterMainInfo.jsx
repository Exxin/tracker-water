import WaterDailyNorma from '../WaterDaily/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgress/WaterProgressBar.jsx';
import MainAddWaterBtn from '../MainAddWaterBtn/MainAddWaterBtn.jsx';

import css from './WaterMainInfo.module.css';
import LogoLink from '../LogoLink/LogoLink.jsx';

const WaterMainInfo = () => {
  return (
    <div className={css.waterMainContainer}>
      <LogoLink />
      <WaterDailyNorma />
      <WaterProgressBar />
      <MainAddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
