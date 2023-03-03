import {GotoBack} from '../hooks/GotoBack'
import {useSelector,useDispatch} from "react-redux";
import { useState } from 'react';
import {SeatTick} from './SeatsTick'
import './style/ButtonDate.css'

const Choice = () => {
    const filmDate = useSelector((film) => film.dateOnline.dateOnline.nameFime)
    const idFilm = useSelector((id) => (id.posts.posts));
    const [openTick, setOpenTick] = useState(false);
    const [idbutton, setIdbutton] = useState('');

    const OpenCompTick = (index) => {
        if (idbutton == "") {
            setIdbutton(index);
            setOpenTick(!openTick);
        } 
        if (index != idbutton) {
            setIdbutton(index);
            setOpenTick(true);
        }
        if (idbutton == index ) {
            setOpenTick(!openTick);
        }
        
        
        // setOpenTick(!openTick);
        
    }
    // console.log(openTick)
    // console.log(idbutton);

    const DateFilme = () => {
        // console.log("Start",filmDate)
        return(
            <div>
                {
                filmDate != undefined ?
                    filmDate[0][idFilm.imdbID].map((number,index,fulku) => 
                        (<button onClick={() => OpenCompTick(index)} key={index} className='buttonDateOnline'>{fulku[index]}</button>))
                        :
                    ""
                }
            </div>
        )
    }
    return(
        <div>
            <GotoBack/>
            <h1>gg</h1>
            <DateFilme/>
            {openTick ? <SeatTick statys={openTick} index={idbutton}/> : ''}
        </div>
    )
}


export {Choice}