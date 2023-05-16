import {useNavigate} from "react-router-dom";
import GotoBackStyle from '../hooks/GotoBack.module.css'

const GotoBack = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return(
        <button className={GotoBackStyle.button_back_main} onClick={goBack}>Назад</button>
    )
};

export {GotoBack};