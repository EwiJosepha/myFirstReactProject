import { useEffect } from "react"
import { Link } from "react-router-dom";

function Profilecreated () {
const values = JSON.parse(localStorage.getItem('userData'))


useEffect(()=>{
  console.log('values', values);
},[])

  return <>

  <div className="px-6 py-4 max-w-md mx-auto bg-white p-8 border rounded shadow-md">
    <Link to="/Edittfile"><button>Edit Data</button></Link>
    <div className="font-bold text-xl mb-2">
      <p className= " text-3xl font-bold underline w-full px-3 py-2 border text-indigo-700">User's Data</p>
      <p className="text-gray-700 text-base">NameS: {values.name}.</p>
      <p className="text-gray-700 text-base">Email: {values.email}.</p>
      <p className="text-gray-700 text-base">Number: {values.number}.</p>
      <p className="text-gray-700 text-base">Address: {values.address}.</p>
      <p className="text-gray-700 text-base">Password: {values.password}.</p>
     
    </div>

    </div>
 
  </>
}

export default Profilecreated

top.innerHTML += `<div class="top">
<div class="subcard" id="subcards">
  
<img src=${item.thumbnail} />
<i class="fa-regular fa-heart"></i>
</div>

<div class="snikersprice">
  <span id="snykers">${item.title}</span>
  <span id="snykers-price">$${item.price}</span>
</div>

<div class="shoes-available">
  <p id="shoes"> 5 types of shoes available</p>
</div>
<div class="stars">
<img src="images/Star.png">
<img src="images/Star.png">
<img src="images/Star.png">
<img src="images/Star.png">
<img src="images/Star (1).png">
  <p id="number">(121)</p>
</div>          
<div class="date">
  <button id="addtocard">Add to Card</button>
  <button id="shortlist">Short List</button>
</div>


</div>

`;