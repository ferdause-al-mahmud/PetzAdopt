import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PetListing from "../Pages/PetListing/PetListing";
import PetCardDetails from "../Components/PetCardDetails/PetCardDetails";
import DonationCampaign from "../Pages/DonationCampaign/DonationCampaign";
import DonationDetails from "../Components/donationDetails/DonationDetails";
import Dashboard from "../Layouts/Dashboard";
import AddPet from "../Pages/Dashboard/AddPet";
import MyAddedPets from "../Pages/Dashboard/MyAddedPets";
import Updatepet from "../Components/Dashboard/User/Updatepet";

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
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register></Register> },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                index: true,
                element: <AddPet />,
            },
            {
                path: 'add-pet',
                element: <AddPet />,
            },
            {
                path: 'added-pets',
                element: <MyAddedPets></MyAddedPets>,
            },
            {
                path: 'update-pet/:id',
                element: <Updatepet />,
            },
        ]
    }
]);