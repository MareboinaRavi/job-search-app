import React from 'react'

 const Pagination = ({MaxPostPerAction, TotalPosts, ChangeButtonNumbers}) => {
  let numbers=[];
    let NumberofButtons = TotalPosts/MaxPostPerAction;
    for(let i=1;i<Math.ceil(NumberofButtons);i++){
        numbers.push(i)
    }
  
  
  return (
        <div>
           
  <ul class="pagination">
    {
      numbers?.map((page,i)=>
    <li class="page-item " key={i}>
      <a class="page-link"  onClick={()=>ChangeButtonNumbers(page)}>
        {page}</a></li>
    )
  }

  </ul>

        </div>
    )
}
export default Pagination