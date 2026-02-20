// Products Data
// Add your products here with all details

const products = [
    {
        id: 1,
        title: 'Stephen Curry Davidson College Graphic T-Shirt Vintage Basketball',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring Stephen Curry at Davidson College. Printed to order with high-quality, long-lasting detail for everyday wear. Built for comfort, durability, and clean style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/CurryTee copy.png',
            'images/CurryTee Concrete.png',
            'images/SIZE CHART Curry.png'
        ],
        colors: []
    },
    {
        id: 2,
        title: 'Los Angeles Dodgers World Champions Rings Vintage Graphic T-Shirt',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring the Los Angeles Dodgers and their World Champions rings. Printed to order with high-quality, long-lasting detail and a clean vintage-inspired look. Built for everyday wear with dependable durability, all-day comfort, and timeless baseball style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/Chasing3BlackTee copy.png',
            'images/Chasing3BlackTee Concrete.png',
            'images/Chasing3PepperTee copy.png',
            'images/Chasing3PepperTee Concrete.png',
            'images/SIZE CHART Chasing3Bl.png'
        ],
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'Pepper', hex: '#2D2D2D' }
        ]
    },
    {
        id: 3,
        title: 'Shohei Ohtani Sliding Graphic T-Shirt Vintage Baseball',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring an iconic sliding moment from Shohei Ohtani. Printed to order with high-quality, long-lasting detail and a clean vintage baseball look. Built for everyday wear with dependable durability, all-day comfort, and a timeless, classic style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/SlideTee copy.png',
            'images/SlideTee Concrete.png',
            'images/SIZE CHART The Slide.png'
        ],
        colors: []
    },
    {
        id: 4,
        title: 'Black & White Vintage Mookie Betts T-Shirt',
        price: 25.00,
        description: 'Premium cotton tee featuring the iconic Mookie Betts vintage design. High-quality screen print on soft, comfortable fabric.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/Mookie.jpg',
            'images/mookie.mp4',
            'images/Mookie2.jpg',
            'images/MookieSizeChart.jpg'
        ],
        colors: []
    },
    {
        id: 5,
        title: 'Black & White Vintage Shohei Ohtani T-Shirt',
        price: 25.00,
        description: 'Premium cotton tee featuring the iconic Shohei Ohtani vintage design. High-quality screen print on soft, comfortable fabric.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/Shohei.jpg',
            'images/Ohtani Vid.mp4',
            'images/shohei2.jpg',
            'images/shoheisize.jpg'
        ],
        colors: []
    },
    {
        id: 6,
        title: 'Yoshinobu Yamamoto Graphic T-Shirt Vintage Baseball',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired graphic of Yoshinobu Yamamoto. Printed to order with high-quality, long-lasting detail for sharp contrast and a timeless baseball look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/YoshinobuTee copy.png',
            'images/YoshinobuTee Concrete.png',
            'images/SIZE CHART Yoshinobu.png'
        ],
        colors: []
    },
    {
        id: 7,
        title: 'Vintage Dallas Cowboys Graphic T-Shirt',
        price: 20.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring the Dallas Cowboys. Printed to order with high-quality, long-lasting detail and a vintage-inspired look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic football style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/Cowboys WhBg.png',
            'images/cowboys.mp4',
            'images/BCowboys GrBg.png',
            'images/SIZE CHART Cowboys copy.png'
        ],
        colors: []
    },
    {
        id: 8,
        title: 'Puka Nacua LA Rams Graphic T-Shirt Vintage Football Comic',
        price: 20.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring Puka Nacua of the Los Angeles Rams. Printed to order with high-quality, long-lasting detail and a vintage comic-style look. Built for everyday wear with reliable durability, all-day comfort, and a classic football vibe.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/NacuaTee copy.png',
            'images/NacuaTee Concrete.png',
            'images/SIZE CHART Puka.png'
        ],
        colors: []
    },
    {
        id: 9,
        title: 'Jaxon Smith-Njigba Superbowl Graphic T-Shirt Vintage Football Comic',
        price: 20.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired graphic of Jaxon Smith-Njigba. Printed to order with high-quality, long-lasting detail for crisp visuals and a timeless football look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic style for true football fans.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/JSNTee copy.png',
            'images/JSNTee Concrete.png',
            'images/SIZE CHART JSN.png'
        ],
        colors: []
    },
    {
        id: 10,
        title: 'Drake Maye Superbowl Graphic T-Shirt Vintage Football Comic',
        price: 20.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage‑inspired graphic of Drake Maye. Printed to order with high‑quality, long‑lasting detail for crisp visuals and a timeless football comic look. Built for everyday wear with dependable durability, all‑day comfort, and a clean, classic style for true football fans.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/MayeTee copy.png',
            'images/MayeTee Concrete.png',
            'images/MayeSizeChart.png'
        ],
        colors: []
    },
    {
        id: 11,
        title: 'New York Yankees Vintage Graphic T-Shirt',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired graphic of the New York Yankees. Printed to order with high-quality, long-lasting detail for crisp visuals and a timeless baseball look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic style for true baseball fans.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/YankeesTee copy.png',
            'images/YankeesTee Concrete.png',
            'images/SIZE CHART Yankees.png'
        ],
        colors: []
    },
    {
        id: 12,
        title: 'Shohei Ohtani Superstar Graphic T-Shirt Vintage Baseball Comic',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired comic-style graphic of Shohei Ohtani. Printed to order with high-quality, long-lasting detail for crisp visuals and a timeless baseball look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic style for true baseball fans.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/ShoheiTee copy.png',
            'images/ShoheiTee Concrete.png',
            'images/SIZE CHART Shohei.png'
        ],
        colors: []
    },
    {
        id: 13,
        title: 'Luka Doncic Superstar Graphic T-Shirt Vintage Basketball Comic',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired comic-style graphic of Luka Doncic. Printed to order with high-quality, long-lasting detail for crisp visuals and a timeless basketball look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic style for true basketball fans.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/LukaTee copy.png',
            'images/LukaTee Concrete.png',
            'images/SIZE CHART Luka.png'
        ],
        colors: []
    },
    {
        id: 14,
        title: 'Anthony Edwards Superstar Graphic T-Shirt Vintage Basketball Comic',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired comic-style graphic of Anthony Edwards. Printed to order with high-quality, long-lasting detail for crisp visuals and a timeless basketball look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic style for true basketball fans.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/AntTee copy.png',
            'images/AntTee Concrete.png',
            'images/SIZE CHART ANT.png'
        ],
        colors: []
    },
    {
        id: 15,
        title: 'Victor Wembanyama Superstar Graphic T-Shirt Vintage Basketball Comic',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired comic-style graphic of Victor Wembanyama. Printed to order with high-quality, long-lasting detail for crisp visuals and a timeless basketball look. Built for everyday wear with dependable durability, all-day comfort, and a clean, classic style for true basketball fans.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/WembyTee copy.png',
            'images/WembyTee Concrete.png',
            'images/SIZE CHART Wemby.png'
        ],
        colors: []
    },
    {
        id: 16,
        title: 'Super Bowl Bad Bunny Benito Bowl Graphic T-Shirt',
        price: 15.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired graphic of Bad Bunny\'s Benito Bowl. Printed to order with high-quality, long-lasting detail for crisp visuals and a clean, timeless look. Built for everyday wear with dependable durability, all-day comfort, and classic style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/BenitoBowlTee.png',
            'images/BenitoBowlBack copy.png',
            'images/BenitoBowlTee Concrete.png',
            'images/BenitoBowlBack Concrete.png',
            'images/SIZE CHART BenitoBowl.png'
        ],
        colors: [],
        stock: 2
    },
    {
        id: 17,
        title: 'Going For 3! Dodgers Roster T-Shirt',
        price: 20.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired graphic celebrating the Los Angeles Dodgers championship roster. Printed to order with high-quality, long-lasting detail for crisp visuals and a clean, timeless baseball look. Built for everyday wear with dependable durability, all-day comfort, and classic style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/Names Tee copy.png',
            'images/Names GrBg.png',
            'images/SIZE CHART Names copy.png'
        ],
        colors: [],
        stock: 1
    },
    {
        id: 18,
        title: 'Freddie Freeman Los Angeles Dodgers Graphic T-Shirt',
        price: 25.00,
        description: 'Premium heavyweight graphic tee with a soft, comfortable feel and a relaxed classic fit, featuring a vintage-inspired graphic of Freddie Freeman of the Los Angeles Dodgers. Printed to order with high-quality, long-lasting detail for crisp visuals and a clean, timeless baseball look. Built for everyday wear with dependable durability, all-day comfort, and classic style.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/FreddieTee copy.png',
            'images/FreddieTee Concrete.png',
            'images/SIZE CHART Freddie.png'
        ],
        colors: [],
        stock: 1
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
