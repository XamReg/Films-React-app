import {useState,useEffect} from "react";
import {useNavigate, Link, useLoaderData,useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {tiketBuyPlace} from './store/storSlice';
import placeStyle from './style/Places.module.css'
import choiceStyle from './style/Choice.module.css';
import buttonPayStyle from './style/ButtonPay.module.css'


const SeatsTick = ({statys,index,dateButton}) => {
    const [seatFilm, setSeatFilm] = useState([]);
    const [stat,setStat] = useState(false);
    const [ticket, setTicket] = useState([]);
    const dispatch = useDispatch();
    const posts = useSelector((id) => (id.posts.posts));
// useMemo-- mb?
    useEffect(() => {
        fetch(`http://localhost:3001/hall_sinema`)
            .then(res=> res.json())
            .then(data=> setSeatFilm(data))
    },[statys == true]);
    useEffect(() => {
        if (!seatFilm.length) return
        AllPlaces()
    }, [ seatFilm ]);

    const infoTicket = (Title,imdbID,dateFilm,placeM) => {
        dispatch(tiketBuyPlace({Title,imdbID,dateFilm,placeM}))
    }


    const TakeTicket_place = () => {
        if (ticket.length == 0 ) return 
        return(
            <div>
                {
                    ticket.length > 1 ? 
                    <h3>Вы выбрали места: {ticket.join(",")}</h3>
                        :
                    <h3>Вы выбрали место: {ticket.join(",")}</h3>
                }
                 <Link to={`/posts/:${posts.imdbID}/buy_tickets`}>
                    <button className={buttonPayStyle.buttons} onClick={
                        () => infoTicket(
                            posts.Title,
                            posts.imdbID,
                            dateButton,
                            ticket
                        )
                    }>Купить билеты</button>
                </Link>
                {/* <button onClick={checkStatys}>Check</button> */}
            </div>
        )
    }

    

    useEffect(() => {
        if (!ticket.length) return
        TakeTicket_place()
    },[ticket])

    const TakePlace = (placeTicket,placeFree) => {
        if (placeFree == "free")
            {if (!ticket.includes(placeTicket))
                setTicket([...ticket,placeTicket])
            else {
                setTicket(
                    (prevState) => 
                        prevState.filter((prevItem) => prevItem !== placeTicket)
                )
            }}

    }

    const AllPlaces = () => {
        if (!seatFilm.length) return (<></>)
        if(Array.isArray(seatFilm)) {
            if ((Object.keys(seatFilm[0]).includes("seats_hall"))) {
                const places = (seatFilm[0]["seats_hall"])
                if (Array.isArray(places)) {
                    const place =  places.map((label,key,full) => (
                        <button 
                            key={key}
                            className={(
                                ((Object.values(label)[0]) == "free") ?
                                    (ticket.includes((Object.keys(label))[0]) ? 
                                    `${placeStyle.allPlaces} ${placeStyle.takePlace}`
                                            :
                                            `${placeStyle.allPlaces} ${placeStyle.free}`
                                    )
                                        :
                                        `${placeStyle.allPlaces} ${placeStyle.occupied}`
                            )}
                            onClick={() => TakePlace((Object.keys(label))[0],(Object.values(label))[0] )}
                            > 
                            {(Object.keys(label))[0]} 
                        </button>
                    ))
                    return place
                }
            }
        }

    }
    return(
        <div>
            <div className={choiceStyle.screen_pl_center}>
                <img className={choiceStyle.screen_pl} src={require('./image/svg-editor-image.svg').default} alt='mySvgImage' />
            </div>
            {/* <h2>ТУт места {index}</h2> */}
            <div className={choiceStyle.block_place_number}>
                <AllPlaces/>
            </div>
            <TakeTicket_place/>
        </div>
    )
}

export {SeatsTick}