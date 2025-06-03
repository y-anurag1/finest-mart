import React from 'react';
// Corrected imports based on your provided image names
import fruitIcon from '../assets/spices.png';
import flourIcon from '../assets/flour.png';
import honeyIcon from '../assets/honey.png';
import dairyIcon from '../assets/dairy.png';
import vegetablesIcon from '../assets/vegetables.png';

// Updated categoriesData to match the 5 categories in the desktop layout image
// with their correct image imports and descriptions.
const categoriesData = [
  { id: 1, name: 'Dairy Products', image: dairyIcon, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Vegetables & Fruits', image: vegetablesIcon, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, name: 'Spices & Seasonings', image: fruitIcon, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }, // Used fruitIcon as a placeholder, if you have a specific icon for Spices, use that instead.
  { id: 4, name: 'Honey', image: honeyIcon, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, name: 'Flour', image: flourIcon, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const CategoryCard = ({ name, image, description }) => {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer text-center">
      <img src={image} alt={name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2" />
      <h3 className="text-sm font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Shop by Categories</h2>

        {/* Categories Grid - Responsive Columns: 2 on mobile, 3 on sm, 4 on md, 5 on lg */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
          {categoriesData.map(category => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;