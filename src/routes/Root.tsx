import {Outlet} from "react-router-dom";
import SideBarNavigation from "../components/sideBarNavigation/SideBarNavigation";

const Root = () => {
    return (
        <div className="container">
            <SideBarNavigation/>
            <Outlet/>
        </div>
    );
}

export default Root