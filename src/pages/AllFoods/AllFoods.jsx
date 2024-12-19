import { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './AllFoods.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Helmet } from 'react-helmet-async';
const AllFoods = () => {
    const [foodsItem, setFoodsItem] = useState([]);
    const [value, setValue] = useState([]);
    const [noResultsFound, setNoResultsFound] = useState(false);
    const [back, setBack] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [count, setCount] = useState(0)


    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    useEffect(() => {
        fetch(`https://restaurant-management-server-six.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setFoodsItem(data))
    }, [currentPage, itemsPerPage])

    const handleSearch = () => {
        fetch(`https://restaurant-management-server-six.vercel.app/search?name=${value}`)
            .then((response) => response.json())
            .then((data) => {
                setFoodsItem(data)
                setBack(true)
                setNoResultsFound(data.length === 0);
            })
            .catch((error) => console.error(error));
    };
    const handleBack = () => {
        setBack(false);
        window.location.reload(true)
    }
    useEffect(() => {
        fetch('https://restaurant-management-server-six.vercel.app/foodsCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }



    return (
        <div className='bg-slate-300 max-w-7xl mx-auto'>
            <Helmet>
            <title>FoodieFleet|AllFood</title>
            </Helmet> 
            <h3 className={`text-center text-3xl mt-2 font-bold pt-6 `}>All Foods </h3>
            <div className="mt-10 flex justify-end">
                <input type="text" onChange={(e) => setValue(e.target.value)} className="border-solid border-2 border-[#DEDEDE] bg-[#FFF] py-3 pl-1 w-80" name="text" placeholder="Search Food name here...." />
                <button onClick={handleSearch} className="bg-[#FF444A] text-[#FFF] py-[14px] px-7">Search</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2'>
                {
                    foodsItem.map(food => <Food
                        key={food._id} food={food}></Food>)
                }

            </div>
            {
                noResultsFound ?
                    <div className='text-center max-w-7xl '>
                        <p>No products found.</p>
                        <img className='h-[300px] mx-auto' src="https://i.ibb.co/ZVR6MYF/9318688.jpg" alt="No results" />
                    </div>
                    : <div></div>
            }
            {
                back ?
                    <div className='text-center max-w-7xl '>
                        <button onClick={handleBack} className='btn btn-neutral'>Back</button>
                    </div>
                    : <div>
                        <div className='pagination pb-6'>
                <button className='btn btn-ghost font-semibold  text-xl' onClick={handlePrevPage}><AiOutlineArrowLeft></AiOutlineArrowLeft></button>
                {
                    pages.map(page => <button
                        className={`btn btn-outline  ${currentPage === page ? 'selected' : undefined}`}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button className='btn btn-ghost font-semibold text-xl' onClick={handleNextPage}><AiOutlineArrowRight></AiOutlineArrowRight></button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="3">3</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                </select>
            </div>
                    </div>
            }
            
        </div>
    );
};

export default AllFoods;