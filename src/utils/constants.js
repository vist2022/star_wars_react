import Home from "../components/Home";
import SendEmailForm from "../components/SendEmailForm";
import About from "../components/About";
import StarWars from "../components/StarWars";
import Contacts from "../components/contacts/Contacts";


export const pages = {
    homePage: <Home/>,
    navPages: {
        Home: <Home/>,
        'About me': <About/>,
        'Star Wars': <StarWars/>,
        Contacts: <Contacts/>,
    },
    SendEmailForm: <SendEmailForm/>,
}

export const BASE_URL = 'https://sw-info-api.herokuapp.com/v1';
export const farGalaxyUpdatePeriod = 1000 * 60 * 60 * 24 * 15 //period to update data from sever 15 days
export const contactsUpdatePeriod= 1000 * 60 * 60 * 24 * 10//period to update contacts data from sever 10 days

export const aboutUpdatePeriod= 1000 * 60 * 60 * 24 * 30//period to update about data from sever 30 days

export const starWarsDescription = 'Star Wars (retroactively retitled Star Wars: Episode IV – A New Hope)' +
    ' is a 1977 American epic space opera film written and directed by George Lucas, produced by Lucasfilm and' +
    ' distributed by 20th Century-Fox. It was the first film released in the Star Wars film series and the fourth ' +
    'chronological chapter of the "Skywalker Saga". Set "a long time ago" in a fictional universe where the galaxy' +
    ' is ruled by the tyrannical Galactic Empire, the story focuses on a group of freedom fighters known as the Rebel ' +
    'Alliance, who aim to destroy the Empire\'s newest weapon, the Death Star. When Rebel leader Princess Leia is ' +
    'apprehended by the Empire, Luke Skywalker acquires stolen architectural plans of the Death Star and sets out to' +
    ' rescue her while learning the ways of a metaphysical power known as "the Force" from Jedi Master Obi-Wan Kenobi.' +
    ' The cast includes Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness, David Prowse,' +
    ' James Earl Jones, Anthony Daniels, Kenny Baker, and Peter Mayhew.\n' + '\n' + 'Lucas had the idea for a' +
    ' science-fiction film in the vein of Flash Gordon around the time he completed his first film, THX 1138 (1971),' +
    ' and began working on a treatment after the release of American Graffiti (1973). After numerous rewrites, filming' +
    ' took place throughout 1975 and 1976 in locations including Tunisia and Elstree Studios in Hertfordshire, England.' +
    ' The film suffered production difficulties; the cast and crew involved believed the film would be a failure.' +
    ' Lucas formed the visual effects company Industrial Light & Magic to help create the film\'s special effects. ' +
    'It also went $3 million over budget due to delays.\n' + '\n' + 'Star Wars was released in a limited number of' +
    ' theaters in the United States on May 25, 1977, and quickly became a blockbuster hit, leading to it being' +
    ' expanded to a much wider release. The film opened to critical acclaim for its acting, direction, story,' +
    ' musical score, action sequences, sound, editing, screenplay, costume design, and production values,' +
    ' but particularly for its groundbreaking visual effects. It grossed $410 million worldwide during its initial run,' +
    ' surpassing Jaws (1975) to become the highest-grossing film until the release of E.T. the Extra-Terrestrial (1982);' +
    ' subsequent releases brought its total gross to $775 million. When adjusted for inflation, Star Wars is the' +
    ' second-highest-grossing film in North America (behind Gone with the Wind) and the fourth-highest-grossing film ' +
    'of all time. It received numerous awards at the Academy Awards, BAFTA Awards, and Saturn Awards, among others.' +
    ' The film has been reissued many times with Lucas\'s support—most significantly with its 20th-anniversary' +
    ' theatrical "Special Edition"—incorporating many changes including modified computer-generated effects,' +
    ' altered dialogue, re-edited shots, remixed soundtracks and added scenes.\n' + '\n' + 'Often regarded as one of ' +
    'the greatest and most influential films ever made, the film became a pop-cultural phenomenon, launching an' +
    ' industry of tie-in products, including novels, comics, video games, amusement park attractions and merchandise ' +
    'including toys, games, and clothing. It became one of the first 25 films selected by the United States Library' +
    ' of Congress for preservation in the National Film Registry in 1989, while its soundtrack was added to the' +
    ' U.S. National Recording Registry in 2004. The Empire Strikes Back (1980) and Return of the Jedi (1983) followed' +
    ' Star Wars, rounding out the original Star Wars trilogy. A prequel and a sequel trilogy have since been released,' +
    ' in addition to two anthology films and various television series.'


