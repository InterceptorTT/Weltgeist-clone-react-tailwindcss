import arrow from "../images/icons8-arrow-up-24.png"

const Footer = () => {

    function scrollToTopButton(){
        const scrollToTop = () => {
            window.scrollTo({top: 0, behavior: "smooth"})
        }
    }


    return  <div className="w-full mt-8 bg-black md:flex md:justify-between md:items-center h-24 border-t-2 border-solid border-red-600">
                <div>
                    <ul className="w-[30rem] grid grid-cols-2 sm:flex sm:justify-evenly uppercase">
                        <li><a className="text-white font-custom font-bold hover:text-red-600" href="#">home</a></li>
                        <li><a className="text-white font-custom font-bold hover:text-red-600" href="#">features</a></li>
                        <li><a className="text-white font-custom font-bold hover:text-red-600" href="#">pages</a></li>
                        <li><a className="text-white font-custom font-bold hover:text-red-600" href="#">new</a></li>
                        <li><a className="text-white font-custom font-bold hover:text-red-600" href="#">video</a></li>
                        <li><a className="text-white font-custom font-bold hover:text-red-600" href="#">world</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <p>designed and developed by <span className="font-bold text-white">Qodeinteractive</span></p>
                    <button onClick={scrollToTopButton()} className="bg-red-600"><img src={arrow} alt="" /></button>
                </div>
            </div>
}

export default Footer