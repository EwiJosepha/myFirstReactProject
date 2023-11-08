import { Link } from "react-router-dom"

function Landing () {

return <>

<div className="max-w-sm rounded overflow-hidden shadow-lg ">
<Link to="Form">
      <p className=" text-3xl font-bold underline w-full px-3 py-2 border text-indigo-700">FASHION BLOG</p></Link>
<img  className="w-full" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2VzJTIwb2YlMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="Fashion is KEY"/>
  <div className="px-6 py-4">
 
    <div className="font-bold text-xl mb-2">The Best Fashion Blog</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
 
  </>
}

export default Landing