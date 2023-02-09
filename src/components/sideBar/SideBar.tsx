import React, {useState} from 'react';
import SideBarNavigation from "../sideBarNavigation/SideBarNavigation";
import classnames from 'classnames';
import styles from "./SideBar.module.scss"

const SideBar = () => {
    const [isHidden, setIsHidden] = useState(false)
    const toggleIsHidden = () => {
        setIsHidden(prev => !prev)
    }
    return (
        <div className={classnames(styles.wrapper, {
            [styles.hidden]: isHidden
        })}
        >
            <button type="button"
                    className={styles.menu_toggle}
                    onClick={toggleIsHidden}>
                <span></span>
            </button>
            <SideBarNavigation/>
        </div>
    );
};

export default SideBar;