import React from 'react'

export const Card = ({title,price,image,description}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <img src={image} alt={title} className="h-48 object-contain p-4" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h2 className="text-lg font-bold text-gray-800 ">{title}</h2>
            <p className="text-sm text-gray-600  text-justify">{description}</p>
            <span className="text-indigo-600 font-semibold text-lg">${price}</span>
          </div>
        </div>
    )
}


