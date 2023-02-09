import {Outlet} from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";

const Root = () => {
    return (
        <div className="container">
            <SideBar/>
            <Outlet/>
        </div>
    );
}

export default Root