import './cards.css'

const Cards=() =>{

    const cardsdata=[{imgage:"https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",title:"Fruits & Veges"},
        {imgage:"https://food-mart-template.vercel.app/images/icon-bread-baguette.png",title:"Breads & Sweets"},
        {imgage:"https://food-mart-template.vercel.app/images/icon-soft-drinks-bottle.png",title:"Fruits & Veges"},
        {imgage:"https://food-mart-template.vercel.app/images/icon-wine-glass-bottle.png",title:"Fruits & Veges"},
        {imgage:"https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",title:"Fruits & Veges"}
    ]
    return <div className='parent'>
        {cardsdata.map((value,index)=> <div key={index} className="cards">
            <img src={value.imgage} alt="" srcset="" width="40px" height="40px" />
            <span>{value.title}</span>
        </div>)}
    </div>
}
export default Cards
