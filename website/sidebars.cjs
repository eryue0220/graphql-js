'use strict';

module.exports = {
  tutorialSidebar: [
    'tutorials/index',
    'tutorials/running-an-express-graphql-server',
    'tutorials/graphql-clients',
    'tutorials/basic-types',
    'tutorials/passing-arguments',
    'tutorials/object-types',
    'tutorials/mutations-and-input-types',
    'tutorials/authentication-and-express-middleware',
    {
      type: 'category',
      label: 'Advanced',
      items: ['tutorials/constructing-types'],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: ['tutorials/going-to-production'],
    },
    'tutorials/express-graphql',
    'tutorials/defer-stream',
  ],
};
