import React from 'react'

const todosPage = () => {
  return (
    <div className=' bg-slate-700 h-screen' > 
    <h1 className=' text-2xl p-4 flex items-center justify-center m-6 '>To Do List</h1>
    <br/>  <br/>
    <input type='text' placeholder='Add a Items' className=' items-center'/>
    <button>+</button>
    </div>
  )
}

export default todosPage