import React from 'react';
import { useParams } from 'react-router-dom';

const OrderModal = () => {
    const { id } = useParams();
    return (
        <div className='mt-32'>
            <h1>oredr modal : {id}</h1>
        </div>
    );
};

export default OrderModal;