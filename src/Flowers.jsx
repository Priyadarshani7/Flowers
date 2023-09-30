import React from 'react'

const Flowers=(props)=> {
  console.log(props)
  return (
    <div>
      <div class='p-[20px] bg-[#FBFFB1] ml-[20%] mr-[20%] text-center'>
          <h1 class=''>{props.title}</h1>
          <br></br>
          <img class='w-[60%] block ml-auto mr-auto ' src={props.imgsrc} alt='rose'/>
          <br></br>
          <p class='text-left'>{props.des}</p>
          <br></br>
          <button class='bg-[#FFA41B] py-2 px-4 rounded-3xl text-[#E4F1FF] '>{props.btn}</button>
       
        </div>
        <br></br>
    </div>
  )
}

export default Flowers;
