const initialData = {
    items: [
        {
            imgUrl: 'https://www.itgenius.co.th/sandbox_api/cpallstockapi/public/images/stock/pepsi.jpg',
            title: 'Pepsi Zero',
            description: 'Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893 by Caleb Bradham and introduced as it was renamed as Pepsi-Cola in 1898,[1] and then shortened to Pepsi in 1961. Pepsi was first introduced as in New Bern, North Carolina, United States, in 1893',
            quantity: 12,
            price: 15.00
        },
        {
            imgUrl: 'https://www.itgenius.co.th/sandbox_api/cpallstockapi/public/images/stock/sprite.jpg',
            title: 'Sprite',
            description: 'Sprite is a colorless, lemon and lime-flavored soft drink created by The Coca-Cola Company. It was first developed in West Germany in 1959 as Fanta Klare Zitrone ("Clear Lemon Fanta") and was introduced in the United States under the current brand name Sprite in 1961 as a competitor to 7 Up. Sprite advertising',
            quantity: 22,
            price: 12.00
        },
        {
            imgUrl: 'https://www.itgenius.co.th/sandbox_api/cpallstockapi/public/images/stock/tipco.jpg',
            title: 'Tipco น้ำองุ่นแดง',
            description: 'In botany, a fruit is the seed-bearing structure in flowering plants (also known as angiosperms) formed from the ovary after flowering. Fruits are the means by which angiosperms disseminate seeds. Edible fruits, in particular, have propagated with the movements of humans and animals in a symbiotic',
            quantity: 5,
            price: 8.00
        },
        {
            imgUrl: 'https://www.itgenius.co.th/assets/frondend/images/picarticle/25-1-2564%2012-07-21-zukq2qxvoj4c.png',
            title: 'Sony Camera',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, omnis est dicta sed perspiciatis voluptatum iure asperiores voluptatem ad repellendus nam incidunt aspernatur ducimus facere. Nostrum adipisci modi natus magnam',
            quantity: 10,
            price: 25000.00
        },
        {
            imgUrl: 'https://www.itgenius.co.th/assets/frondend/images/picarticle/7-1-2564%2015-01-42-any58qtmz5a5.png',
            title: 'Xiaomi Mi 10i',
            description: 'Xiaomi เปิดตัว Mi 10i มือถือสเปกเบาๆ พร้อมขุมพลัง Snapdragon 750G รองรับจอ LCD 120Hz กล้อง 108 MP',
            quantity: 8,
            price: 16500.00
        }
    ]
}

const ProductReducer = (state = initialData, action) => {
    return state
}

export default ProductReducer