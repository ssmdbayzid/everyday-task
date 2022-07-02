import React from 'react';
import facebook from '../../facebook-f-brands.svg'
import twiter from '../../twitter-brands.svg'
import instragram from '../../instagram-brands.svg'

const Footer = () => {
    return (
        <footer className="footer items-center p-4 mx-16 justify-center text-[black] text-neutral-content">
            <div className="items-center text-center grid-flow-col">                
                <p className='text-center text-black text-lg'>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <img src={facebook} alt='' />
                <img src={twiter} alt='' />
                <img src={instragram} alt='' />
            </div>
        </footer>
    );
};

export default Footer;