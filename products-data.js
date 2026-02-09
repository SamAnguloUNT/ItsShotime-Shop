// Products Data
// Add your products here with all details

const products = [
    {
        id: 1,
        title: 'Black & White Vintage Mookie Betts T-Shirt',
        price: 25.00,
        description: 'Premium cotton tee featuring the iconic Mookie Betts vintage design. High-quality screen print on soft, comfortable fabric.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/Mookie.jpg',
            'images/Mookie2.jpg',
            'images/MookieSizeChart.jpg'
        ],
        colors: []
    },
    // Add more products here like this:
    {
        id: 2,
        title: 'Black & White Vintage Shohei Ohtani T-Shirt',
        price: 25.00,
        description: 'Premium cotton tee featuring the iconic Shohei Ohtani vintage design. High-quality screen print on soft, comfortable fabric.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['images/Mookie.jpg',
                 'images/shohei2.jpg',
                 'images/shoheisize.jpg',
        ],
       colors: []
      }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}