import { useState } from 'react';
import banner from '../../../assets/banner.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    const [activeButton, setActiveButton] = useState(1);
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero max-w-full mx-auto" style={{

                        background: 'rgba(255, 255, 255, 0.7)',

                        backgroundImage: `url(${banner})`,

                        backgroundSize: 'cover',

                        backgroundPosition: 'center',

                        backgroundRepeat: 'no-repeat',

                        width: '100%',

                        height: '580px',

                    }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-white text-3xl font-bold  ">Unique Dishes and Friendly Atmosphere</h1>
                                <p className='mb-5 text-white text-base font-thin lg:w-[950px]'>Step into our culinary haven, where every dish is a masterpiece and
                                    every visit feels like coming home. Our menu boasts an array of
                                    one-of-a-kind culinary creations that will tantalize your taste
                                    buds and leave you craving for more. Whether you're sharing a
                                    meal with friends or enjoying a quiet dinner for two, our warm
                                    and friendly atmosphere sets the perfect backdrop for unforgettable
                                    moments. Explore our exceptional dishes and immerse yourself in the
                                    heartwarming ambiance. Your culinary adventure begins here.
                                </p>
                                <div className="mt-10">
                                    <Link to="/menu"><button className=" rounded-lg bg-[#8b4e50] text-[#FFF] py-[14px] px-7">All Menus</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero max-w-full mx-auto" style={{

                        background: 'rgba(255, 255, 255, 0.7)',

                        backgroundImage: `url(${banner2})`,

                        backgroundSize: 'cover',

                        backgroundPosition: 'center',

                        backgroundRepeat: 'no-repeat',

                        width: '100%',

                        height: '580px',

                    }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-white text-3xl font-bold  ">Discover Culinary Delights</h1>
                                <p className='mb-5 text-white text-base font-thin lg:w-[950px]'>Indulge in a world of exquisite flavors and culinary experiences at our restaurant. From mouthwatering appetizers to delectable main courses and irresistible desserts, we invite you to savor every moment. Explore our diverse menu offerings and embark on a culinary journey that will delight your senses. Join us today and experience the art of fine dining.
                                </p>
                                <div className="mt-10">
                                <Link to="/menu"><button className=" rounded-lg bg-[#8b4e50] text-[#FFF] py-[14px] px-7">All Menus</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                <div className="hero max-w-full mx-auto" style={{

background: 'rgba(255, 255, 255, 0.7)',

backgroundImage: `url(${banner3})`,

backgroundSize: 'cover',

backgroundPosition: 'center',

backgroundRepeat: 'no-repeat',

width: '100%',

height: '580px',

}}>
<div className="hero-overlay bg-opacity-70"></div>
<div className="hero-content text-center text-neutral-content">
    <div className="">
        <h1 className="mb-5 text-white text-3xl font-bold  ">Savor the Flavors</h1>
        <p className='mb-5 text-white text-base font-thin lg:w-[950px]'>
        Experience Culinary Delights Like Never Before. From Our Kitchen to Your Table.
        </p>
        <div className="mt-10">
        <Link to="/menu"><button className=" rounded-lg bg-[#8b4e50] text-[#FFF] py-[14px] px-7">All Menus</button></Link>
        </div>
    </div>
</div>
</div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" onClick={() => setActiveButton(1)} className={`btn btn-xs font-semibold ${activeButton === 1 ? 'bg-[#8b4e50]' : ''}`}>1</a>
                <a href="#item2" onClick={() => setActiveButton(2)} className={`btn btn-xs font-semibold ${activeButton === 2 ? 'bg-[#8b4e50]' : ''}`}>2</a>
                <a href="#item3" onClick={() => setActiveButton(3)} className={`btn btn-xs font-semibold ${activeButton === 3 ? 'bg-[#8b4e50]' : ''}`}>3</a>

            </div>





        </div>
    );
};

export default Banner;