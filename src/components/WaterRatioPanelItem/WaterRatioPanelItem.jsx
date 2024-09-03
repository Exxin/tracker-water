import css from './WaterRatioPanelItem.module.css'

export default function WaterRatioPanelItem() { 
    return (
        <div className={css.container}>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="/src/assets/img/sprite.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>250ml</p>
                    <p className={css.timeInfo}>10:00PM</p>
                </div>
                <div className={css.iconsContainer}>
                    <button className={css.iconsButton} type="button"><svg className={css.notebook} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-note"></use>
                    </svg></button>
                    <button className={css.iconsButton} type="button"><svg className={css.trashbox} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-trash"></use>
                    </svg></button>
                </div>
            </div>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="/src/assets/img/sprite.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>200ml</p>
                    <p className={css.timeInfo}>7:00AM</p>
                </div>
                <div className={css.iconsContainer}>
                    <button className={css.iconsButton} type="button"><svg className={css.notebook} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-note"></use>
                    </svg></button>
                    <button className={css.iconsButton} type="button"><svg className={css.trashbox} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-trash"></use>
                    </svg></button>
                </div>
            </div>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="/src/assets/img/sprite.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>150ml</p>
                    <p className={css.timeInfo}>14:00PM</p>
                </div>
                <div className={css.iconsContainer}>
                    <button className={css.iconsButton} type="button"><svg className={css.notebook} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-note"></use>
                    </svg></button>
                    <button className={css.iconsButton} type="button"><svg className={css.trashbox} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-trash"></use>
                    </svg></button>
                </div>
            </div>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="/src/assets/img/sprite.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>250ml</p>
                    <p className={css.timeInfo}>10:00PM</p>
                </div>
                <div className={css.iconsContainer}>
                    <button className={css.iconsButton} type="button"><svg className={css.notebook} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-note"></use>
                    </svg></button>
                    <button className={css.iconsButton} type="button"><svg className={css.trashbox} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-trash"></use>
                    </svg></button>
                </div>
            </div>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="/src/assets/img/sprite.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>200ml</p>
                    <p className={css.timeInfo}>7:00AM</p>
                </div>
                <div className={css.iconsContainer}>
                    <button className={css.iconsButton} type="button"><svg className={css.notebook} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-note"></use>
                    </svg></button>
                    <button className={css.iconsButton} type="button"><svg className={css.trashbox} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-trash"></use>
                    </svg></button>
                </div>
            </div>
            <div className={css.operationContainer}>
                <div className={css.amountInfoContainer}>
                    <svg className={css.iconWaterGlass} width={36} height={36}>
                        <use href="/src/assets/img/sprite.svg#icon-glass"></use>
                    </svg>
                    <p className={css.amountInfo}>150ml</p>
                    <p className={css.timeInfo}>14:00PM</p>
                </div>
                <div className={css.iconsContainer}>
                    <button className={css.iconsButton} type="button"><svg className={css.notebook} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-note"></use>
                    </svg></button>
                    <button className={css.iconsButton} type="button"><svg className={css.trashbox} width={11} height={13}>
                        <use href="/src/assets/img/sprite.svg#icon-trash"></use>
                    </svg></button>
                </div>
            </div>
        </div>
    )
}