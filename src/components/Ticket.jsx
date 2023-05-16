import tiketStyle from './style/Ticket.module.css';

const Ticket = ({tickets}) => {
    const plTickets = tickets.placeM
    const film_date = (tickets.dateFilm).split(" ")
    return(
        <div className={tiketStyle.section}>
            {plTickets.map(pl => (
            <div className={tiketStyle.cardWrap}>
                <div className={`${tiketStyle.card} ${tiketStyle.cardLeft}`}>
                    <h1>Startup <span>Cinema</span></h1>
                    <div className={tiketStyle.title}>
                        <h2>{tickets.Title}</h2>
                        <span>movie</span>
                    </div>
                    <div className={tiketStyle.name}>
                        <h2>Vladimir Kudinov</h2>
                        <span>name</span>
                    </div>
                    <div className={tiketStyle.seat}>
                        <h2>{pl}</h2>
                        <span>seat</span>
                    </div>
                    <div className={tiketStyle.time}>
                        <h2>{film_date[1]}</h2>
                        <span>time</span>
                    </div>
                    <div className={tiketStyle.time}>
                        <h2>{film_date[0]}</h2>
                        <span>date</span>
                    </div>
                </div>
                <div className={`${tiketStyle.card} ${tiketStyle.cardRight}`}>
                    <div className={tiketStyle.eye}></div>
                    <div class={tiketStyle.number}>
                            <h3>{pl}</h3>
                    <span>seat</span>
                    </div>
                </div> 
            </div>))}
        </div>
    )
}

export {Ticket};