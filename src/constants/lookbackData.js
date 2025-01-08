const lookbackData = [
  {
    id: 1,
    pages: [
      {
        mediaUrl: "/videos/video.mp4",
        mediaType: "image",
        products: [
          {
            productId: 1,
            productName: "Blue Denim Jacket",
            productDescription: "Classic fit denim jacket",
            productPrice: 99.99,
            productUrl: "/products/blue-denim-jacket",
            productImage: "https://via.placeholder.com/150",
            position: {
              left: 20,
              top: 30
            }
          },
          {
            productId: 2,
            productName: "White T-Shirt",
            productDescription: "Cotton crew neck t-shirt",
            productPrice: 29.99,
            productUrl: "/products/white-tshirt",
            productImage: "https://via.placeholder.com/150",
            position: {
              left: 60,
              top: 50
            }
          }
        ]
      },
      {
        mediaUrl: "https://via.placeholder.com/1080x1920",
        mediaType: "video",
        products: [
          {
            productId: 3,
            productName: "Black Jeans",
            productDescription: "Slim fit black jeans",
            productPrice: 79.99,
            productUrl: "/products/black-jeans",
            productImage: "https://via.placeholder.com/150",
            position: {
              left: 40,
              top: 70
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    pages: [
      // Similar structure for next preview
    ]
  }
];

export default lookbackData;
