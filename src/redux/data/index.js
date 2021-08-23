export const categories = [
    { normalizedName: 'PC', displayName: 'PC', description: 'this is a collection of PC products' },
    { normalizedName: 'Mobile', displayName: 'Mobile', description: 'this is a collection of Mobile products' },
    { normalizedName: 'Furniture', displayName: 'Furniture', description: 'this is a collection of Furniture products' },
];
// category association, name, description, price, inventory count
export const products = [
    {
        category: categories[0].normalizedName,
        name: 'Acer Nitro 5',
        description: 'Best gaming PC',
        price: '700$',
        inventoryCount: 1250,
        image: 'https://www.notebookcheck.net/uploads/tx_nbc2/AcerNitro5-AN515-55__1__03.JPG'
    },
    {
        category: categories[0].normalizedName,
        name: 'Lenovo Legion',
        description: 'Not the best still good',
        price: '350$',
        inventoryCount: 400,
        image: 'https://www.notebookcheck.net/uploads/tx_nbc2/LenovoLegion5Pro16__1__02.JPG'
    },
    {
        category: categories[0].normalizedName,
        name: 'Mac Book Pro',
        description: 'Just... Expensive!',
        price: '2000$',
        inventoryCount: 95,
        image: 'https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg'
    },
    {
        category: categories[1].normalizedName,
        name: 'IPhone 11 pro',
        description: 'I have no idea what to say',
        price: '1500$',
        inventoryCount: 36,
        image: 'https://assets.swappie.com/iPhone-11-Pro-Max-midnight-green-back.png'

    },
    {
        category: categories[1].normalizedName,
        name: 'Samsung s20',
        description: 'Only for good people',
        price: '500$',
        inventoryCount: 18,
        image: 'https://www.cnet.com/a/img/ssYuj4Hvp6llPujPLYEr0YU9Q80=/940x0/2020/03/02/8fd20345-9026-4167-9057-23c011d03a48/27-samsung-galaxy-s20-plus.jpg'
    },
    {
        category: categories[1].normalizedName,
        name: 'Huawei p30 pro',
        description: 'Hello? Android?',
        price: '30$',
        inventoryCount: 8,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGl70D1YaJAXbL4DkWloSXH8BOgStLYbEZhw&usqp=CAU'
    },
    {
        category: categories[2].normalizedName,
        name: 'A Bed',
        description: 'Who doesn\'t sleep?',
        price: '100$',
        inventoryCount: 5,
        image: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw0b805ada/images/1220000/1223156.jpg'
    },
    {
        category: categories[2].normalizedName,
        name: 'A Couch',
        description: 'Sit and Relax',
        price: '70$',
        inventoryCount: 75,
        image: 'data:image/jpeg;base64,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'
    },
    {
        category: categories[2].normalizedName,
        name: 'Dinning table',
        description: 'Wanna grab somethin to eat?',
        price: '89$',
        inventoryCount: 28,
        image: 'https://m.media-amazon.com/images/I/71x-NV5eUqL._SL1100_.jpg'
    },
];
