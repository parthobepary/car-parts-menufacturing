import React from 'react';
import { useNavigate } from 'react-router-dom';
import pagenot from '../../assets/img/404.png';



const PagenotFount = () => {
    const navigate = useNavigate()
    return (
        <div className=' my-3 flex items-center container mx-auto'>
            <div>
                <img className='w-3/4 rounded-lg' src={pagenot} alt="" />
            </div>
            <div>
                <h1 className="text-4xl text-red-500 font-bold">404 Page not fount 😢😢</h1>
                <div>
                    <button onClick={()=> navigate('/home')} className='btn btn-success btn-xs px-20 font-bold mt-4'>go to home</button>
                </div>
            </div>
        </div>
    );
};

export default PagenotFount;