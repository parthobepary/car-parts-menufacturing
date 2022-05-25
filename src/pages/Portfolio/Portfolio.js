import React from 'react';
import Footer from '../Shared/Footer';
import Aboutme from './Aboutme';
import Another from './Another';
import Education from './Education';

const Portfolio = () => {
    return (
        <div>
            <Aboutme />
            <Education />
            <Another />
            <Footer />
        </div>
    );
};

export default Portfolio;