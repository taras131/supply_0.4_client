import {Link, Outlet} from "react-router-dom";
import styles from "./Root.module.scss";

const  Root = () => {
    return (
        <div className={styles.wrapper} >
            <div className={styles.sidebar}>
                <h1>React Router Contacts</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`payment_invoices`}>PaymentInvoices</Link>
                        </li>
                        <li>
                            <Link to={`consignment_notes`}>ConsignmentNotes</Link>
                        </li>
                        <li>
                            <Link to={`orders`}>Orders</Link>
                        </li>
                        <li>
                            <Link to={`shipments`}>Shipments</Link>
                        </li>
                        <li>
                            <Link to={`suppliers`}>Suppliers</Link>
                        </li>
                        <li>
                            <Link to={`users`}>Users</Link>
                        </li>
                        <li>
                            <Link to={`login`}>login</Link>
                        </li>
                        <li>
                            <Link to={`register`}>register</Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <main id="detail">
                <Outlet />
            </main>
        </div>
    );
}

export default Root