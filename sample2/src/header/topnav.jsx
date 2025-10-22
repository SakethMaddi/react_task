const TopNav=()=>{
    const price=50
    return <nav style={{height:"50px",border:"1px solid black",width:"100%",backgroundColor:"black",color:"white",display:"flex",padding:"0px 50px",justifyContent:"space-around" }}>
        <div>
            <p>Free shipping on all u.s orders over ${price}</p> 
        </div>
        <div >
            <ul style={{listStyleType:"none",display:"flex",gap:"50px"}}>
                <li>USD</li>
                <li>ENGISH</li>
                <li>MY ACCOUNT</li>
            </ul>
        </div>
       
    </nav>
}
export default TopNav;