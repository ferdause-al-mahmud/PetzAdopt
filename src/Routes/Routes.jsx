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
import CreateCampaign from "../Pages/Dashboard/CreateCampaign";
import MyDonationCampaigns from "../Pages/Dashboard/MyDonationCampaigns";
import PrivateRoute from "./PrivateRoute";
import UpdateCampaign from "../Components/Dashboard/User/UpdateCampaign";

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
                element: <PrivateRoute><PetCardDetails></PetCardDetails></PrivateRoute>,
            },
            {
                path: '/donation-campaign',
                element: <DonationCampaign></DonationCampaign>,
            },
            {
                path: '/donation-campaign/:id',
                element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
            },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register></Register> },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
            {
                path: 'create-campaign',
                element: <CreateCampaign />,
            },
            {
                path: 'donation-campaigns',
                element: <MyDonationCampaigns />,
            },
            {
                path: 'update-campaign/:id',
                element: <UpdateCampaign></UpdateCampaign>,
            },
        ]
    }
]);