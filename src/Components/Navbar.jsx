import React from 'react'


export const Navbar=()=>{
    return(
        <>
        <div className="navbar bg-base-100 w-full shadow-sm">
 
    <div className='flex-1'><input type="text" placeholder="Search" className="input input-bordered w-96 " /></div> 
  <div className="flex w-80 gap-2">
    <div className='text-xl space-x-3 text-gray-500 mr-4'>
    <i class="fa-regular fa-calendar "></i>
    <i class="fa-regular fa-message"></i>
    <i class="fa-regular fa-bell"></i>
    </div>
    <div className='text-xs flex flex-col gap-1 mr-2'>
      <h2 className='font-semibold '>Ranawat</h2>
      <p className='text-gray-500 font-semibold'>Udaipur(Raj.),India</p>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </>
    )
}