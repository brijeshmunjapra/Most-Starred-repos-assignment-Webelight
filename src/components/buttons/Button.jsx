import React from 'react'
import { FaAngleDoubleRight, FaAngleDoubleLeft  } from "react-icons/fa";

function Button({ nextPageFn, prevPageFn, page }) {
  return (
    <div className='buttonsContainer'>

     <button  className='buttons' onClick={() => prevPageFn()} disabled={page === "1"}>
     <FaAngleDoubleLeft className="prev" /> Previous
     </button>

     <span className="currentPage">{page}</span>

     <button className='buttons' onClick={() => nextPageFn()}>
     Next<FaAngleDoubleRight/>
     </button>

    </div>
  )
}

export default Button;