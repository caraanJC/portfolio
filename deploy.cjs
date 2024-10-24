const ghpages = require('gh-pages')

ghpages.publish('dist', { nojekyll: true, cname: 'www.caraan-jc.xyz', dotfiles: true, })

console.log('published')