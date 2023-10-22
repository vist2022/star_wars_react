import Home from "../components/Home";
import SendEmailForm from "../components/SendEmailForm";
import About from "../components/About";
import StarWars from "../components/StarWars";
import Contacts from "../components/Contacts";



export const pages =
    {
        homePage:<Home/>,
        navPages: {
            Home: <Home/>,
            About: <About/>,
            StarWars: <StarWars/>,
            Contacts: <Contacts/>,
        },
        SendEmailForm: <SendEmailForm/>,
    }