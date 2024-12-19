import React from 'react';
import Banner from './Banner/Banner';
import TopFood from './TopFood/TopFood';
import { useLoaderData } from 'react-router-dom';
import Reservation from './Reservation/Reservation';
import Menu from './Menu/Menu';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
const Home = () => {
    const Foods = useLoaderData();
    const animationVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };


    return (
        <div>
            <Helmet>
                <title>FoodieFleet|Home</title>
            </Helmet>


            <motion.div
                initial="hidden"
                animate="visible"
                variants={animationVariants}
            >
                <Banner></Banner>
            </motion.div>
           
            <TopFood Foods={Foods}></TopFood>
            


            <div className='bg-slate-200 pt-3 max-w-7xl mx-auto'>
                <Reservation></Reservation>

            </div>
            
            <div className='max-w-7xl mx-auto'>
                <Menu></Menu>
            </div>

        </div>
    );
};

export default Home;