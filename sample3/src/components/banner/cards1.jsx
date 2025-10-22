import './cards1.css'


const Cards1=() =>{

    const cards1data=[{image:"https://food-mart-template.vercel.app/images/product-thumb-11.jpg",text:"Amber Jar",text1:"Honey best nectar you wish to get"},
        {image:"https://food-mart-template.vercel.app/images/product-thumb-12.jpg",text:"Amber Jar",text1:"Honey best nectar you wish to get"},
        {image:"https://food-mart-template.vercel.app/images/product-thumb-13.jpg",text:"Amber Jar",text1:"Honey best nectar you wish to get"},
        {image:"https://food-mart-template.vercel.app/images/product-thumb-14.jpg",text:"Amber Jar",text1:"Honey best nectar you wish to get"}
    ]
    return <div className='cards1'>

        {cards1data.map((value,index)=> <div key={index} className='parent1'>
            <img src={value.image} width='150px' />
            <h3>{value.text}</h3>
            <h6>{value.text1}</h6>
        </div>)}

    </div>
}
export default Cards1