/* eslint-disable react/no-unescaped-entities */
import HeroImg from "../images/hero-welt.jpg"
import Button from "./buttons"
import Author from "./author"

const Hero = () => {
    return  <div className="px-3 mt-4 lg:w-3/5">
                <div>
                    <img src={HeroImg} alt="" />
                        <div className="flex items-center gap-4 -translate-y-6">
                            <Button text="existance"/>
                            <Author />
                        </div>
                    <h1 className="line-effect font-black uppercase text-left text-white">the coolest trip you'll ever experience is here</h1>
                </div>

            </div>
}

export default Hero