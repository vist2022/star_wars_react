import React from 'react';

const Spinner = () => {
    return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border  text-warning" style={{width: '5rem', height: '5rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
    );
};

export default Spinner;