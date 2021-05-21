const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'music',
  },
  {
    category_name: 'sports',
  },
  {
    category_name: 'science',
  },
  {
    category_name: 'reading',
  },
  {
    category_name: 'snow',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;