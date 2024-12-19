import React from 'react';

const Menu = () => {
    return (
        <div>
            <h3 className={`text-center text-4xl mt-10 font-bold text-red-400 pb-1 `}><i>Menu</i></h3>
            <h3 className={`text-center text-2xl mt-0 font-bold  pb-5 `}><i>HANDCRAFTED FOOD</i></h3>

<div className="hero  bg-base-200 mb-2">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://demo.cmssuperheroes.com/themeforest/wp-nuvo-elementor/wp-content/uploads/2020/12/img-menu-left.png" className="md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">DISHES FOR EVERY OCCASION</h1>
      <p className="py-6">Dishes for Every Occasion is your gateway to a world of culinary delights tailored to suit any event or celebration. Whether it's a romantic dinner for two, a festive family gathering, or a formal corporate event, we have a diverse array of dishes to elevate your dining experience and make every occasion truly special. Explore our versatile menu that caters to your unique tastes and preferences, ensuring that each moment becomes a memorable culinary journey.</p>
    </div>
  </div>
</div>
<div className="hero  bg-base-200 mb-2">
  <div className="hero-content flex-col-reverse lg:flex-row">
    <div>
      <p className="py-6">From intimate family gatherings to grand celebrations, our diverse menu offers a delectable selection of dishes to suit every occasion. Whether you're looking for comforting classics or gourmet delights, we have the perfect flavors to elevate your event. Discover a world of culinary possibilities that will make your special moments even more memorable. At FoodieFleet, we take pride in serving you the ideal dish for every celebration, ensuring that your dining experience is truly exceptional.</p>
      <button className="btn btn-accent">Give Feedback</button>
    </div>
    <img src="https://demo.cmssuperheroes.com/themeforest/wp-nuvo-elementor/wp-content/uploads/2020/12/img-menu-right.png" />

  </div>
</div>
</div>
    );
};

export default Menu;