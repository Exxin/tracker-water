import WaterRatioPanel from "../WaterRatioPanel/WaterRatioPanel"
import css from './TodayWaterList.module.css'

export default function TodayWaterList() {

    return (
        <div className={css.container}>
            <h2 className={css.title}>Today</h2>
            <WaterRatioPanel className={css.addWaterBox}/>
            <button className={css.button} type="button">+ Add water</button>
        </div>
    )
}