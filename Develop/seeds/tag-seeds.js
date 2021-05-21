const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'dance',
  },
  {
    tag_name: 'health',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'phone',
  },
  {
    tag_name: 'water',
  },
  {
    tag_name: 'drink',
  },
  {
    tag_name: 'number',
  },
  {
    tag_name: 'calculator',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;