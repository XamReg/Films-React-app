import {useState,useEffect} from "react"



const SeatTick = ({statys,index}) => {
    const [seatFilm, setSeatFilm] = useState([""]);
    const [stat,setStat] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3001/hall_sinema`)
            .then(res=> res.json())
            .then(data=> setSeatFilm(data))
        setStat(!stat)
        // console.log('Tyt')
            
    },[statys == true]);
    // const seatPl = seatFilm
    useEffect(() => {
        console.log(seatFilm[0]['seats_hall'])
        setStat(!stat )
        console.log(typeof(seatFilm))
    }, [seatFilm]);
    const AllPlaces =() => {
        return(
            <div>
                {/* {(seatFilm[0]["seats_hall"]).map((label,key,full) => 
                        <a>{full[key]}</a>)
                } */}
            </div>
                )
    }
    return(
        <div>
            <h2>ТУт места {index}</h2>
            {/* {stat != false ? <AllPlaces/> : ""} */}
        </div>
    )
}

export {SeatTick}