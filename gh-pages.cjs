var ghpages = require('gh-pages');

ghpages.publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/naufalzm30/website_lantang_nirwana', // Update to point to your repository
    user: {
      name: 'naufalzm30', // update to use your name
      email: 'naufalzm30@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);