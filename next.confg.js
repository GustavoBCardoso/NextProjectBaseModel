
const withImages = require('next-images')
const path = require('path')

module.exports = withImages({
  esModule: true,
})

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}