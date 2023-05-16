import {useNavigate, Link, useLoaderData,useParams} from "react-router-dom";
import {GotoBack} from "../hooks/GotoBack"
import {useDispatch,useSelector} from "react-redux";
import {ticketBuy} from "./store/storSlice";
import choiceStyles from "./style/Choice.module.css";
import postContentStyle from './style/PostContent.module.css';
import infoTicketStyle from './style/InfoTicket.module.css';
import { Ticket } from "./Ticket";
import {useState} from "react";

const InfoTicket = () => {
    const ticket = useSelector(tick => tick.ticketBuy.ticketBuy);
    const [tiketDate, setTiketDate] = useState(ticket);
    return(
        <div className={postContentStyle.block_post_main}>
            <div className={choiceStyles.posit_back}>
                <GotoBack/>
            </div>
            <div className={infoTicketStyle.styleTicket}>
                <h1 className={infoTicketStyle.titleTicket}>Ваш билет на фильм:</h1>
                <Ticket tickets={ticket}/>
            </div>
        </div>
    )
}

export {InfoTicket};