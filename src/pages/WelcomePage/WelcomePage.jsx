import { useNavigate } from "react-router-dom";
import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleTryTrackerClick = () => {
    navigate("/signup");
  };

  return (
    <div className={css.welcomepage}>
      <div className={css.waterconsumptiontracker}>
        <h1 className={css.pagetitle}>Water consumption tracker</h1>
        <h2 className={css.pagesubtitle}>
          Record daily water intake and track
        </h2>
        <div className={css.trackerbenefits}>
          <h3 className={css.sectiontitle}>Tracker Benefits</h3>
          <ul className={css.trackerbenefitslist}>
            <li className={css.trackerbenefitslistitem}>
              <svg className={css.benefiticon}>
                <use href="/src/assets/img/sprite.svg#icon-calendar" />
              </svg>
              Habit drive
            </li>
            <li className={css.trackerbenefitslistitem}>
              <svg className={css.benefiticon}>
                <use href="/src/assets/img/sprite.svg#icon-outline1" />
              </svg>
              View statistics
            </li>
            <li className={css.trackerbenefitslistitem}>
              <svg className={css.benefiticon}>
                <use href="/src/assets/img/sprite.svg#icon-tools" />
              </svg>
              Personal rate setting
            </li>
          </ul>
        </div>
        <button onClick={handleTryTrackerClick} className={css.trybutton}>
          Try tracker
        </button>
      </div>
      <div className={css.whydrinkwater}>
        <h3 className={css.sectiontitle}>Why drink water</h3>
        <ul className={css.whydrinkwaterlist}>
          <li className={css.whydrinkwaterlistitem}>
            Supply of nutrients to all organs
          </li>
          <li className={css.whydrinkwaterlistitem}>
            Providing oxygen to the lungs
          </li>
          <li className={css.whydrinkwaterlistitem}>
            Maintaining the work of the heart
          </li>
          <li className={css.whydrinkwaterlistitem}>
            Release of processed substances
          </li>
          <li className={css.whydrinkwaterlistitem}>
            Ensuring the stability of the internal environment
          </li>
          <li className={css.whydrinkwaterlistitem}>
            Maintaining within the normal temperature
          </li>
          <li className={css.whydrinkwaterlistitem}>
            Maintaining an immune system capable of resisting disease
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
