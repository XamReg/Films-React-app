import {GotoBack} from '../hooks/GotoBack'
import {useSelector,useDispatch} from "react-redux";
import { useState,useEffect } from 'react';
import {SeatsTick} from './SeatsTick'
import './style/ButtonDate.css'
import choiceStyles from './style/Choice.module.css'
import postContentStyle from './style/PostContent.module.css'
const Choice = () => {
    const filmDate = useSelector((film) => film.dateOnline.dateOnline.nameFime)
    const idFilm = useSelector((id) => (id.posts.posts));
    const [openTick, setOpenTick] = useState(false);
    const [idbutton, setIdbutton] = useState('');
    const [dateButton, setDateButton] = useState("");
    const [styleButton, setStyleButton] = useState("pysto");
    const OpenCompTick = (index,date) => {
        if (date != dateButton)
            setDateButton(date)
        if (idbutton == "") {
            setIdbutton(index);
            setStyleButton(index);
            setOpenTick(!openTick);
        } 
        if (index != idbutton) {
            setIdbutton(index);
            setOpenTick(true);
            setStyleButton(index);

        }
        if (idbutton == index ) {
            if (styleButton != "pysto"){setStyleButton("pysto")}
            setOpenTick(!openTick);
        }
    }
   

    // console.log(openTick)
    // console.log(idbutton);
    const block_film_open = styleButton === "pysto" ? "": choiceStyles.block_place
    const DateFilme = () => {
        
        return(
            <div>
                {
                filmDate != undefined ?
                    filmDate[0][idFilm.imdbID].map((number,index,fulku) => 
                        (<button onClick={() => OpenCompTick(index,fulku[index])} 
                        key={index} 
                        className={
                            styleButton === index 
                            ? 
                            `${choiceStyles.button_date_films} ${choiceStyles.active_button}`
                            : 
                            choiceStyles.button_date_films}
                        >{fulku[index]}</button>))
                        :
                    ""
                }
            </div>
        )
    }
    return(
        <div className={postContentStyle.block_post_main}>
            <div className={choiceStyles.block_button_date}>
                <div className={choiceStyles.posit_back}>
                    <GotoBack />
                </div>
                <h1 className={choiceStyles.titleFont}>Даты фильма {idFilm.Title} в прокате:</h1>
                <div>
                    <DateFilme/>
                </div>
            </div>
            <div className={block_film_open}>
                {/* <img src={require('./image/svg-editor-image.svg').default} alt='mySvgImage' /> */}
                {openTick ? <SeatsTick statys={openTick} index={idbutton} dateButton={dateButton}/> : ''}
            </div>
        </div>
    )
}


export {Choice}