import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Error from "../views/Error.tsx";
import {Dashboard} from "../views/Dashboard.tsx";
import Layout from "../components/Misc/Layout.tsx";
import Profile from "../views/Profile.tsx";
import Account from "../views/Account.tsx";
import Payment from "../views/Payment.tsx";
import Beneficiaries from "../views/Beneficiaries.tsx";
import Documents from "../views/Documents.tsx";
import Applications from "../views/Applications.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:  <Error />,

        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/admin/profile",
                element: <Profile />,
            },   {
                path: "/account",
                element: <Account />,
            },   {
                path: "/m/payment",
                element: <Payment />,
            },   {
                path: "/beneficiaries",
                element: <Beneficiaries />,
            },   {
                path: "/documents",
                element: <Documents />,
            },
            {
                path: "/applications",
                element: <Applications />,
            },
        ]
    },
]);


const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
