export const SlideMenu=()=>{
    return(
        <>
        <div className='bg-purple-50 flex-col h-screen p-3 '>    

        
    <h1 className=" border-r-2 h-13 place-content-center place-self-center font-bold text-2xl">Project L</h1>
    <hr />
        <div className="sec1 mb-3 ">
            <ul className="flex flex-col  gap-1">
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
            </ul>
            <hr />
        </div>
        <div className="sec2 mb-5">
           <div className="flex justify-between "><h2 className="text-xs">MY PROJECTS </h2><span>+</span></div> 
        <ul className="text-sm">
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
                <li className="p-2 font-semibold text-gray-800 text-sm">Home</li>
            </ul>
        </div>
        <div className="sec3Message bg-base-200 rounded-2xl gap-3 flex flex-col items-center">
             <h2 className="font-semibold">Thoughts Time</h2>
             <p className="text-xs text-gray-800">Lorem ipsum dolor ti enim totam debitis ipsa? Laboriosam voluptatum quibusdam accusantium itaque consequuntur fuga officiis harum.</p>
             <textarea className="text-center rounded-md bg-white  font-semibold text-black text-xs" name="" id="" cols="18" rows="2" >Write a message</textarea>
        </div>

        </div>
        </>
    )
}