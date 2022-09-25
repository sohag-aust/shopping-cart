import React from 'react'
import Cart from './Cart';
import Products from './Products';
import TotalItems from './TotalItems';
import TotalPrices from './TotalPrices';

function Shopping() {

    const products = [
        {
            name: 'Asus Vivobook X515MA',
            qty: 20,
            price: 35500
        },
        {
            name: 'Dell E1916HV 18.5 Inch',
            qty: 35,
            price: 9300
        },
        {
            name: 'Canon Eos 4000D 18MP',
            qty: 72,
            price: 36500
        }
    ];

    const cartItems = [
        {
            name: 'Asus Vivobook X515MA',
            qty: 0
        },
        {
            name: 'Dell E1916HV 18.5 Inch',
            qty: 0
        },
        {
            name: 'Canon Eos 4000D 18MP',
            qty: 0
        }
    ];

    return (
        <div class="bg-gray-50 h-full md:h-screen">
            <div class="grid place-items-center">
                <h1
                    class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
                >
                    Shopping Cart
                </h1>
            </div>

            <div class="grid grid-cols-12 gap-6">
                <div
                    class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
                >
                    <Products products = {products} />
                </div>

                <div
                    class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
                >
                    <div
                        class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        
                        <Cart items = {cartItems} />

                        <TotalItems />
                        
                    </div>

                    <TotalPrices />
                    
                </div>
            </div>
        </div>
    )
}

export default Shopping;
