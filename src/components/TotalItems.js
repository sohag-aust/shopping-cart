import React from 'react'
import { useSelector } from 'react-redux';

function TotalItems() {
    const totalItems = useSelector((state) => state.totalItems);

    return (
      <div
          class="flex justify-center items-center text-center"
      >
          <div class="text-xl font-semibold">
              <p>Total Item</p>
              <p class="text-5xl">{totalItems}</p>
          </div>
      </div>
    )
}

export default TotalItems;