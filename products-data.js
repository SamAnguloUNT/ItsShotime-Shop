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
            'images/MookieSizeChart.jpg',
            // Add more images here:
            // 'images/BadBunny-back.jpg',
            // 'images/BadBunny-detail.jpg',
            // 'images/BadBunny-lifestyle.jpg'
        ],
        colors: [
            // Add color variations here:
            // { name: 'Black', hex: '#000000' },
            // { name: 'Navy', hex: '#001f3f' },
            // { name: 'White', hex: '#FFFFFF' }
        ]
    },
    // Example of how to add more products:
    /*
    {
        id: 2,
        title: 'Another Awesome T-Shirt',
        price: 29.99,
        description: 'Your product description here.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'images/shirt2-front.jpg',
            'images/shirt2-back.jpg',
            'images/shirt2-detail.jpg'
        ],
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Red', hex: '#FF0000' }
        ]
    },
    {
        id: 3,
        title: 'Cool Design Tee',
        price: 27.99,
        description: 'Another great product description.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'images/shirt3-main.jpg',
            'images/shirt3-side.jpg'
        ],
        colors: [
            { name: 'Navy', hex: '#001f3f' },
            { name: 'Gray', hex: '#808080' }
        ]
    }
    */
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
