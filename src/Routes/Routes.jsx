import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PetListing from "../Pages/PetListing/PetListing";
import PetCardDetails from "../Components/PetCardDetails/PetCardDetails";
import DonationCampaign from "../Pages/DonationCampaign/DonationCampaign";
import DonationDetails from "../Components/donationDetails/DonationDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/pet-listing',
                element: <PetListing></PetListing>,
            },
            {
                path: '/pet-details/:id',
                element: <PetCardDetails></PetCardDetails>,
            },
            {
                path: '/donation-campaign',
                element: <DonationCampaign></DonationCampaign>,
            },
            {
                path: '/donation-campaign/:id',
                element: <DonationDetails></DonationDetails>,
            },
        ]
    },
]);