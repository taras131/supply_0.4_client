import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PaymentInvoices from "../../pages/paymentInvoice/PaymentInvoices";
import ConsignmentNotes from "../../pages/consignmentNote/ConsignmentNotes";
import Orders from "../../pages/orders/Orders";
import Shipments from "../../pages/shipments/Shipments";
import Suppliers from "../../pages/suppliers/Suppliers";
import Users from "../../pages/users/Users";
import Auth from "../../pages/auth/Auth";
import Root from "../../routes/Root";
import NotFound from "../../pages/notFound/NotFound";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <NotFound />,
            children: [
                {
                    path: "payment_invoices",
                    element: <PaymentInvoices/>
                },
                {
                    path: "consignment_notes",
                    element: <ConsignmentNotes/>
                },
                {
                    path: "orders",
                    element: <Orders/>
                },
                {
                    path: "shipments",
                    element: <Shipments/>
                },
                {
                    path: "suppliers",
                    element: <Suppliers/>
                },
                {
                    path: "users",
                    element: <Users/>
                },
                {
                    path: "login",
                    element: <Auth/>
                },
                {
                    path: "register",
                    element: <Auth/>
                },
            ],
        },

    ])
    return (<RouterProvider router={router}/>);
}

export default App;
