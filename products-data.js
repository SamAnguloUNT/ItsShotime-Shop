// Products Data
// Add your products here with all details

const products = [
    {
        id: 1,
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
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}