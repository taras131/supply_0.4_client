import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "./SideBarNavigationLink.module.scss";

interface ISideBarNavigationLink {
    patch: string
    title: string
}

const SideBarNavigationLink: FC<ISideBarNavigationLink> = ({patch, title}) => {
    return (
        <li>
            <Link className={styles.link} to={patch}>
                <div className={styles.title}>
                    {title}
                </div>
            </Link>
        </li>
    );
};

export default SideBarNavigationLink;