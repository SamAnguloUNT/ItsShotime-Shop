// Products Data
// Add your products here with all details

const products = [
    {
        id: 1,
        title: 'Shotime Worldwide Bulldog Graphic T-Shirt',
        price: 32.49,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring the iconic Shotime Worldwide Bulldog graphic. Printed to order with high-quality, long-lasting detail for everyday wear. Built for comfort, durability, and clean style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/bulldogteefront.png',
            'images/bulldogteeback.png'
        ],
        colors: []
    },
    {
        id: 2,
        title: 'Shotime Worldwide Bulldog Mesh Jersey',
        price: 42.49,
        description: 'Lightweight mesh jersey with a relaxed, oversized fit featuring the iconic Shotime Worldwide Bulldog graphic. Breathable construction built for comfort and style, with high-quality long-lasting print detail. A versatile piece for everyday wear.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/bulldogjerseyfront.png',
            'images/bulldogjerseyback.png'
        ],
        colors: []
    },
    {
        id: 3,
        title: 'Shotime 17 Camo Long Sleeve',
        price: 42.49,
        description: 'Bold all-over camo long sleeve featuring the Shotime 17 varsity graphic on the chest. A layered look with white thermal-style sleeves and a relaxed fit built for everyday comfort and standout style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/camofront.png',
            'images/camoback.png'
        ],
        colors: []
    },
    {
        id: 4,
        title: 'Shotime Basketball Court Flame Long Sleeve',
        price: 52.49,
        description: 'Premium heavyweight black tee layered over a cream thermal with flame graphics down both sleeves. Features a bold Shotime basketball court graphic on the chest. Built for everyday wear with dependable durability and a clean, eye-catching streetwear look.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/blacktopfront.png',
            'images/blacktopback.png'
        ],
        colors: []
    },
    {
        id: 5,
        title: 'Shotime Worldwide 17 Graphic T-Shirt',
        price: 32.49,
        description: 'Premium heavyweight white graphic tee with a relaxed classic fit, featuring the Shotime Worldwide 17 collage design. Printed to order with high-quality, long-lasting detail. Built for comfort, durability, and clean everyday style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/wwfront.png',
            'images/wwback.png'
        ],
        colors: []
    },
    {
        id: 6,
        title: 'Shotime Athletic Dept. Shorts',
        price: 39.99,
        description: 'Premium heavyweight fleece shorts with a relaxed fit, elastic waistband, and drawstring. Features the Shotime Athletic Dept. graphic on the front leg and flame tribal graphics on both sides. Washed for a vintage feel — built for all-day comfort and clean streetwear style. Available in Black and Grey.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/shortsblackfront.png',
            'images/shortsblackback.png',
            'images/shortsgreyfront.png',
            'images/shortsgreyback.png'
        ],
        colors: [
            { name: 'Black', hex: '#1a1a1a' },
            { name: 'Grey', hex: '#9e9e9e' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}