import React from 'react';

const Adminorder = ({order:{name, productName, quntity, _id}}) => {
    return (
        <div className='bg-gray-500 my-4 py-3 text-white rounded-lg'>
            <div className='flex justify-center items-center'>
                <p>CustomarName: {name}</p>
                <p className='mx-3'>ProductName: {productName}</p>
                <p className='mx-3'>Quantity: {quntity}</p>
                <p>Id: {_id}</p>
            </div>
        </div>
    );
};

export default Adminorder;