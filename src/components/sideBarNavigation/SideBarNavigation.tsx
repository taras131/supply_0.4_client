import React from 'react';
import {ROUTE_LIST} from "../../utils/constants";
import SideBarNavigationLink from "../SideBarNavigationLink/SideBarNavigationLink";
import styles from "./SideBarNavigation.module.scss"

const SideBarNavigation = () => {
    const linkList = ROUTE_LIST.map(item => (<SideBarNavigationLink key={item.title}
                                                                    patch={item.path}
                                                                    title={item.title}/>))
    return (
        <nav className={styles.wrapper}>
            <h1>Иткана</h1>
            <ul>
                {linkList}
            </ul>
        </nav>
    );
};

export default SideBarNavigation;