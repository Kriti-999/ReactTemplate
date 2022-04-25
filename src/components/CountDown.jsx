import { useEffect, useState } from "react";
const currentDate = new Date();
function CountDown(props) {
    var minutesToAdd=30;
 
    const calculateTimeLeft = () => {
       
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-4-28`) - +new Date();
        let timeLeft = {};
      
        
      
      

        if (difference>0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
 

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {


        timerComponents.push(
            <span>
                {timeLeft[interval]}{" "}
            </span>
        );
    });
    if(timerComponents.length>0){
    return (
        <div>
          
                <div className="countdown">
                <p >Offer ends in</p>  
                <ul>
                    <li><span id="days">{timerComponents.at(0)}</span>Days</li>
                    <li><span id="hours">{timerComponents.at(1)}</span>Hours</li>
                    <li><span id="minutes">{timerComponents.at(2)}</span>Minutes</li>
                    <li><span id="seconds">{timerComponents.at(3)}</span>Seconds</li>
                </ul>
            </div>
            </div>)
        }
            else{
                return(
                <p>Offer Ended</p>
                )
            }
            
        
    
}
export default CountDown;