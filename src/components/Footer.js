import React from 'react';

const Footer = (props) => {

    const handleOnClickSendEmail = () => {
        props.changePage('SendEmailForm');
    }

    return (
        <footer className="rounded-bottom-4  fixed-bottom">
            <div className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-btn my-3"
                 onClick={handleOnClickSendEmail}>
                <p className='my-0'>Send me an <span className="email">email</span></p>
            </div>
        </footer>
    );
};

export default Footer;