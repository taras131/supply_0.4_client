import React from 'react';
import SideBarNavigation from "../sideBarNavigation/SideBarNavigation";
import styles from "./SideBar.module.scss"

const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <h1>React Router Contacts</h1>
            <SideBarNavigation/>
        </div>
    );
};

export default SideBar;