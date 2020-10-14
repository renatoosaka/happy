import Image from '../models/Image'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `https://3333-e388a352-bce0-4b0c-a27b-d22b87f824f9.ws-us02.gitpod.io/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}