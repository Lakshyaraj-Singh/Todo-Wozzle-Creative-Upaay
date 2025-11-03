export const SlideMenu=()=>{
    return(
        <>
        <div className='bg-white cursor-pointer border-[0.5px] flex-col max-h-fit sticky left-0 top-0 p-3 '>    

        
    <div className="flex items-center justify-center">
    <img className="h-7 w-7 rounded-full" src="https://i.pinimg.com/736x/ab/00/9e/ab009e63b24e1d56b0ed608f7fe62dcf.jpg" alt="" />
    <h1 className="  h-13 place-content-center place-self-center font-bold text-2xl">Project L</h1>
        </div>
    <hr />
        <div className="sec1 mb-3 ">
            <ul className="flex flex-col  gap-1">
                <li className="p-2 font-semibold text-gray-800 text-sm"><i class="fa-solid fa-house"></i> Home</li>
                <li className="p-2 font-semibold text-gray-800 text-sm"><i class="fa-regular fa-message mr-1 "></i>Messages</li>
                <li className="p-2 font-semibold text-gray-800 text-sm"><i class="fa-solid fa-list-check mr-1 "></i>Tasks</li>
                <li className="p-2 font-semibold text-gray-800 text-sm"><i class="fa-solid fa-gear mr-1 "></i>Settings</li>
            </ul>
            <hr />
        </div>
        <div className="sec2 mb-10">
           <div className="flex justify-between "><h2 className="text-xs">MY PROJECTS </h2><span>+</span></div> 
        <ul className="text-sm">
                <li className="p-2 font-semibold text-gray-800 text-xs"><i class="fa-solid fa-diagram-project mr-1"></i>Demo App</li>
                <li className="p-2 font-semibold text-gray-800 text-xs"><i class="fa-solid fa-diagram-project mr-1"></i>Website Redesign</li>
                <li className="p-2 font-semibold text-gray-800 text-xs"><i class="fa-solid fa-diagram-project mr-1"></i>Creative Upay</li>
                <li className="p-2 font-semibold text-gray-800 text-xs"><i class="fa-solid fa-diagram-project mr-1"></i>Wireframes</li>
            </ul>
        </div>
        <div className="sec3Message bg-gray-200 rounded-2xl gap-3 text-center flex flex-col items-center">
            <img className="h-20 w-20 rounded-full -mt-7" src="https://static.vecteezy.com/system/resources/previews/069/459/853/non_2x/light-bulb-icon-creative-idea-and-innovation-free-vector.jpg" alt="" />
             <h2 className="font-semibold">Thoughts Time</h2>
             <p className="text-xs text-gray-800 p-1">Lorem ipsum dolor ti enim totam debitis ipsa? Laboriosam voluptatum quibusdam accusantium itaque consequuntur fuga officiis harum.</p>
             <textarea className="text-center rounded-md bg-white  font-semibold text-black text-xs" name="" id="" cols="18" rows="2" >Write a message</textarea>
        </div>

        </div>
        </>
    )
}