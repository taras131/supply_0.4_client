import PaymentInvoices from "../pages/paymentInvoice/PaymentInvoices";
import ConsignmentNotes from "../pages/consignmentNote/ConsignmentNotes";
import Orders from "../pages/orders/Orders";
import Shipments from "../pages/shipments/Shipments";
import Suppliers from "../pages/suppliers/Suppliers";
import Users from "../pages/users/Users";
import Auth from "../pages/auth/Auth";

export const ROUTE_LIST = [
    {
        path: `payment_invoices`,
        title: "PaymentInvoices",
        component: PaymentInvoices
    },
    {
        path: `consignment_notes`,
        title: "ConsignmentNotes",
        component: ConsignmentNotes
    },
    {
        path: `orders`,
        title: "Orders",
        component: Orders
    },
    {
        path: `shipments`,
        title: "Shipments",
        component: Shipments
    },
    {
        path: `suppliers`,
        title: "Suppliers",
        component: Suppliers
    },
    {
        path: `users`,
        title: "Users",
        component: Users
    },
    {
        path: `login`,
        title: "Login",
        component: Auth
    },
    {
        path: `register`,
        title: "Register",
        component: Auth
    },
]