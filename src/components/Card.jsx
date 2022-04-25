import Timer from "./Timer";
import { useEffect, useState } from "react";
import C from "./c"
function Card() {
    function cardDetail(val){
        return (
            <C list1={val.content[0]}
            list2={val.content[1]}
            list3={val.content[2]}
            list4={val.content[3]}
            list5  ={val.content[4]}
            suit={val.suit}
            save={val.save}
            originalPrice={val.originalPrice}
            planId={val.planId}
            session={val.session}
            backgroundColor={val.backgroundColor}
            />
        )
    }
    const [dataFetch, setData] = useState([]);
    async function getCardDetail() {
        try {
            const res = await fetch("http://demo3755793.mockable.io/plans");
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData);
        }
        catch (err) {
            console.log("Hi");
        }
    };

    useEffect(() => {
        getCardDetail();
    }, []);
    return   <div className="container">
    <div className="row">
        {dataFetch.map(cardDetail)}
        </div>
        </div>
}
export default Card;