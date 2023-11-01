import React from 'react';
import {contextStarWars} from "../utils/contextStarWars";

const Footer = () => {

    return (
        <contextStarWars.Consumer>
            {value =>
                    <footer className="rounded-bottom-4  fixed-bottom">
                        <div className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-btn my-3"
                             onClick={()=>value.changePage('SendEmailForm')}>
                            <p className='my-0'>Send me an <span className="email">email</span></p>
                        </div>
                    </footer>
            }
        </contextStarWars.Consumer>
    )
};

export default Footer;