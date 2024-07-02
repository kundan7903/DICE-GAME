import { useState } from "react"
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [selectedNumber, setSelectedNumber] = useState();
    const [showRules,setshowRules] = useState("true");

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };

      
      const roleDice = () => {
        if (!selectedNumber) {
          setError("You have not selected any number");
          return;
        }
    
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);
    
        if (selectedNumber === randomNumber) {
          setScore((prev) => prev + 2);
        } else {
          setScore((prev) => prev - 2);
        }
    
        setSelectedNumber(undefined);
      };
    
      const resetScore = () => {
        setScore(0);
      };
    


    return (
        <div>
            <div className="flex  h-[151px] top-[64px] left-[80px] gap-[593px] items-center justify-around">
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className="flex flex-col  gap-[10px] justify-center ">
                <button className=" font-[600] text-[16px] leading-[24px]  mx-auto mt-4 w-[230px] h-[44px] pt-[10px] pr-[18px] pb-[10px] pl-[18px] hover:bg-black hover:text-white text-black border-[1px] rounded-md border-black" onClick={resetScore}>
                Reset Score
                </button>
                <button 
                className="font-[600] text-[16px] leading-[24px]  mx-auto mt-4 w-[230px] h-[44px] pt-[10px] pr-[18px] pb-[10px] pl-[18px] hover:bg-white bg-black hover:text-black text-white border-[1px] rounded-md border-black "
                onClick={()=>setshowRules(prev => !prev)}
                >{
                    !showRules? "Hide ":"Show "
                }
               Rules
                </button>
            </div>
            {!showRules && <Rules />}
        </div>

    )


}
export default GamePlay
