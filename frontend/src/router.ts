import { createBrowserRouter } from "react-router-dom";

import Index from '../src/components/pages.blocks/Index/Index'
import Account from '../src/components/pages.blocks/Account/Account'
import Peoples from './components/pages.blocks/Peoples/Peoples'
import Logout from './components/pages.blocks/Logout/Logout'

export const router = createBrowserRouter([
    {
        id: "index",
        path: "/",
        Component: Index
    },
    {
        id: "account",
        path: "/account",
        Component: Account
    },
    {
        id: "peoples",
        path: "/peoples",
        Component: Peoples
    },
    {
        id: "logout",
        path: "/logout",
        Component: Logout
    }
]);