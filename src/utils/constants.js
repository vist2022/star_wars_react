import Home from "../components/Home";
import SendEmailForm from "../components/SendEmailForm";
import About from "../components/About";
import StarWars from "../components/StarWars";
import Contacts from "../components/Contacts";


export const pages =
    {
        homePage: <Home/>,
        navPages: {
            Home: <Home/>,
            About: <About/>,
            StarWars: <StarWars/>,
            Contacts: <Contacts/>,
        },
        SendEmailForm: <SendEmailForm/>,
    }

export const BASE_URL = 'https://sw-info-api.herokuapp.com/v1';
export const period = 1000 * 60 * 60 * 24 * 15 //period to update data from sever 15 days

