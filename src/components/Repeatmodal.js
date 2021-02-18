import React, {useContext,useState,useEffect,useRef} from 'react'
import produce from 'immer';

export default function Repeatmodal({showModal, setShowRepeatModal, amountTimeframeRef,applyRepeatSettings,typeTimeframeRef,endRepeatFrame,weekDays,setWeekDays}) {

    const [amountTimeframe, setAmountTimeframe] = useState("1");
    const [showWeekDays, setShowWeekDays] = useState(false);
    const dateFrame = useRef()
    const attemptsFrame = useRef()
    const [radioType,setRadioType] = useState("never");
    

       
    function addWeekDaySettings(){
        if(typeTimeframeRef.current.value === "weeks"){
            setShowWeekDays(true);
        }else{
            setShowWeekDays(false);
        }
    }

    function handleRadioChange(event) {
        const getType = event.target.value;
        setRadioType(getType)
    }

    function getRadioSelectedInput(type){
        if(type === "date"){
            return dateFrame.current.value;
        }
        if(type === "attempts"){
            return attemptsFrame.current.value;
        }
        if(type === "never"){
            return "never"
        }
    }

    function handlingSubmit(){
        if (getRadioSelectedInput(radioType) == "") {
            endRepeatFrame = {
                type:"never",
                value: "never",
            };
        }else{
            endRepeatFrame = {
                type:radioType,
                value:getRadioSelectedInput(radioType),
            }
        }
        setShowWeekDays(false);
        applyRepeatSettings(endRepeatFrame);
    }

    function handlingCancel(){
        setShowWeekDays(false);
        setShowRepeatModal(false);
    }
    
    return (
        <>
            {showModal ? 
            <div className="repeat-modal flex-center p-1">
                <div className="flex-center flex-d-column m-1 p-1 repeat-content">
                    <h1>Repeat Settings</h1>
                    <div className="flex-center flex-d-row p-1">
                        <p>every:</p>
                        <input type="number" min="1" value={amountTimeframe} onChange={e => setAmountTimeframe(e.target.value)} ref={amountTimeframeRef} /> 
                        <select onChange={addWeekDaySettings} ref={typeTimeframeRef}>
                            <option value="days">Day(s)</option>
                            <option value="weeks">Week</option>
                            <option value="months">Month</option>
                            <option value="years">Year</option>
                        </select>
                    </div>
                    {showWeekDays ? 
                    <div className="flex flex-d-row flex-j-start">
                        {weekDays.map((item, i)=>
                            <button key={i} style={item.state == false ? {backgroundColor:""}: {backgroundColor:"lightblue"} }
                            onClick={(item)=>{ 
                                const newButtons = produce(weekDays, weekdayCopy => {
                                    weekdayCopy[i].state = !weekDays[i].state;
                                })
                                setWeekDays(newButtons);
                            }}
                            >{item.value}</button> 
                            )}
                    </div>
                    : ""}
                    <div>
                        <h1>Ends:</h1>
                        <div className="flex flex-d-column flex-j-start">
                            <form>
                            <p><input type="radio" name="ending" value="never" defaultChecked onChange={handleRadioChange}/>Never</p>
                            <p><input type="radio" name="ending" value="date" onChange={handleRadioChange}/>At: <input type="date" ref={dateFrame}/></p>
                            <p><input type="radio" name="ending" value="attempts" onChange={handleRadioChange}/>After: <input type="number" min="1" ref={attemptsFrame}/> attempt(s)</p>
                            </form>
                        </div>
                    </div>
                    <div>
                    <button onClick={() => handlingCancel()}>Cancel</button>
                    <button onClick={handlingSubmit}>Apply</button>
                    </div>
                </div>
                <div className="repeat-background-modal" onClick={() => handlingSubmit()}>
                    
                </div>
            </div> 
            : ""}
        </>
    )
}
