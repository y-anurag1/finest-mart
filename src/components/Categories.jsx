import React from 'react';
// Import your category images here
import dairyIcon from '../assets/dairy.png';
import vegetablesIcon from '../assets/vegetables.png';
import spicesIcon from '../assets/spices.png';
import honeyIcon from '../assets/honey.png';
import flourIcon from '../assets/flour.png';

const categoriesData = [
  {
    id: 1,
    icon: dairyIcon,
    title: 'Dairy Products',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    icon: vegetablesIcon,
    title: 'Vegetables & Fruits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    icon: spicesIcon,
    title: 'Spices & Seasonings',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    icon: honeyIcon,
    title: 'Honey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    icon: flourIcon,
    title: 'Flour',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Categories = () => {
  return (
    // Changed py-16 to py-8 to reduce vertical padding
    <section className="bg-white py-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Removed the <h2> "Explore Our Categories" heading */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;