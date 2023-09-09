const Header = () => {

    function getCurrentDate() {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return today.toLocaleDateString(undefined, options);
}
getCurrentDate()

    return  <div className="hidden md:flex w-full bg-black items-center justify-between">
                <div>
                    <ul className="flex-1 w-[600px] flex uppercase justify-evenly py-5 font-custom">
                        <li><a className="text-white font-bold hover:text-red-600 transition duration-200 ease-in-out" href="#">about</a></li>
                        <li><a className="text-white font-bold hover:text-red-600 transition duration-200 ease-in-out" href="#">contact</a></li>
                        <li><a className="text-white font-bold hover:text-red-600 transition duration-200 ease-in-out" href="#">shop</a></li>
                        <li><a className="text-white font-bold hover:text-red-600 transition duration-200 ease-in-out" href="#">latest</a></li>
                        <li><a className="text-white font-bold hover:text-red-600 transition duration-200 ease-in-out" href="#">trending</a></li>
                    </ul>
                </div>
                <div className="flex-2 p-5">
                    <p>London, {getCurrentDate()}</p>
                </div>
            </div>
}

export default Header