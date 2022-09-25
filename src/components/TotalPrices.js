import React from 'react'
import { useSelector } from 'react-redux';

function TotalPrices() {
    const totalPrice = useSelector((state) => state.totalPrice);

    return (
        <div
            class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
        >
            <div
                class="flex justify-center items-center text-center"
            >
                <div class="text-xl font-semibold">
                    <p>Total Price</p>
                    <p class="text-5xl">{totalPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default TotalPrices;