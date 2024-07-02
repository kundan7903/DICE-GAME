
import logo from "../assets/frontdice.png"


const StartGame = ({ toggle }) => {
    return (
        <div className="max-w-[1080px] h-[100vh] flex my-0  mx-auto items-center">

            {/* image */}
            <div className="w-[649px] h-[522px] ">
                <img src={logo} alt="kundan" />
            </div>
            {/* right side  */}
            <div className="w-[528px] h-[188px] ">
                <h1 className="text-[96px] w-[528px] h-[148px] leading-[144px] font-[700] text-left">
                    DICE GAME
                </h1>
                <button onClick={toggle} className="
        ml-[300px]
        w-[220px] h-[44px]  pt-[10px] pr-[18px] bg-black hover:bg-white hover:text-black border-[2px] border-black  text-white pb-[10px] pl-[18px] rounded-[5px] gap-[10px] ">
                    <p className="font-[600] text-[16px] leading-[24px]  ">
                        play now
                    </p>
                </button>
            </div>


        </div>
    )
}
export default StartGame