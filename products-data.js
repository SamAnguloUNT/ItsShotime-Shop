// Products Data
// Add your products here with all details

const products = [
    {
        id: 1,
        title: 'VINTAGE BULLDOG TEE',
        price: 32.49,
        description: 'A heavyweight 265 GSM tee made from 100% USA cotton, featuring a bold distressed bulldog graphic with vintage varsity detailing. Designed with a relaxed drop-shoulder fit for a premium oversized look.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/bulldogteefront.png',
            'images/bulldogteeback.png',
            'images/BulldogTee1.png',
            'images/BulldogTee2.png',
            'images/BulldogTee3.png',
            'images/BulldogTee4.png'
        ],
        colors: []
    },
    {
        id: 2,
        title: 'VINTAGE BULLDOG MESH JERSEY',
        price: 42.49,
        description: 'A breathable long-sleeve mesh jersey featuring the distressed SHOTIME bulldog graphic and vintage varsity detailing. Designed with a boxy, cropped fit for a bold athletic look. ',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/bulldogjerseyfront.png',
            'images/bulldogjerseyback.png',
            'images/Jersey1.png',
            'images/Jersey2.png',
            'images/Jersey3.png',
            'images/Jersey4.png'
        ],
        colors: []
    },
    {
        id: 3,
        title: 'HIDDEN SEASON DOUBLE-LAYER TEE',
        price: 42.49,
        description: 'A heavyweight 250 GSM, enzyme-washed cotton tee featuring a muted woodland camo body, stitched-in white sleeves, and distressed SHOTIME varsity graphics. Built for a relaxed layered look with premium structure and all-day comfort.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/camofront.png',
            'images/camoback.png',
            'images/Camo1.png',
            'images/Camo2.png',
            'images/Camo3.png',
            'images/Camo4.png'
        ],
        colors: []
    },
    {
        id: 4,
        title: 'BLACKTOP CIRCUIT DOUBLE-LAYER TEE',
        price: 52.49,
        description: 'A 100% cotton double-layer tee featuring a flaming SHOTIME court graphic on the front and bold Blacktop Circuit tour artwork on the back. Finished with cream waffle-knit sleeves, a top-down sun-dried wash, and a relaxed drop-shoulder fit.',
        sizes: ['S', 'L', 'XL'],
        images: [
            'images/blacktopfront.png',
            'images/blacktopback.png',
            'images/BlacktopSleeved1.png',
            'images/BlacktopSleeved2.png',
            'images/BlacktopSleeved3.png',
            'images/BlacktopSleeved4.png',
            'images/BlacktopSleeved5.png',
            'images/BlacktopSleeved6.png'
        ],
        colors: []
    },
    {
        id: 5,
        title: 'WORLDWIDE STATEMENT TEE',
        price: 32.49,
        description: 'A heavyweight 265 GSM tee made from 100% USA cotton, featuring a loud black-and-white collage graphic that blends rebellious energy with global ambition. Built with a premium structured feel and oversized streetwear silhouette.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/wwfront.png',
            'images/wwback.png',
            'images/WWTee1.png',
            'images/WWTee2.png',
            'images/WWTee3.png',
            'images/WWTee4.png'
        ],
        colors: []
    },
    {
        id: 6,
        title: 'ATHLETIC DEPT. FLAME SHORTS BLACK',
        price: 39.99,
        description: 'Heavyweight 400 GSM cotton shorts with a baggy, oversized fit and sun-dried vintage wash. Finished with sharp flame graphics, SHOTIME Athletic Dept. detailing, and oversized cream drawstrings.',
        sizes: ['S', 'L'],
        images: [
            'images/shortsblackfront.png',
            'images/shortsblackback.png',
            'images/Shorts1.png',  
            'images/Shorts2.png',
            'images/Shorts3.png'
        ],
        colors: []
    },
    {
        id: 7,
        title: 'BLACKTOP CIRCUIT TEE',
        price: 37.49,
        description: 'A 180 GSM vintage acid-wash cotton tee featuring a flaming SHOTIME court graphic on the front and bold Blacktop Circuit tour artwork on the back. Finished with a boxy, oversized drop-shoulder fit.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/blacktopfrontshortsleeve.png',
            'images/blacktopbackshortsleeve.png',
            'images/BlacktopTee1.png',
            'images/BlacktopTee2.png',
            'images/BlacktopTee3.png',
            'images/BlacktopTee4.png',
            'images/BlacktopTee5.png',
            'images/BlacktopTee6.png'
        ],
        colors: []
    },
    {
        id: 8,
        title: 'ATHLETIC DEPT. FLAME SHORTS GREY',
        price: 39.99,
        description: 'Heavyweight 400 GSM cotton shorts with a baggy, oversized fit and sun-dried vintage wash. Finished with sharp flame graphics, SHOTIME Athletic Dept. detailing, and oversized cream drawstrings.',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'images/shortsgreyfront.png',
            'images/shortsgreyback.png',
            'images/Shorts4.png',
            'images/Shorts5.png',
            'images/Shorts6.png'
        ],
        colors: []
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}