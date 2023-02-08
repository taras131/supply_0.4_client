import React from 'react';
import styles from "./SideBarNavigation.module.scss"
import {ROUTE_LIST} from "../../utils/constants";
import SideBarNavigationLink from "../SideBarNavigationLink/SideBarNavigationLink";

const SideBarNavigation = () => {
    const linkList = ROUTE_LIST.map(item => (<SideBarNavigationLink key={item.title}
                                                                    patch={item.path}
                                                                    title={item.title}/>))
    return (
        <nav className={styles.wrapper}>
            <ul>
                {linkList}
            </ul>
        </nav>
    );
};

export default SideBarNavigation;