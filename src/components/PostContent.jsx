import { useEffect,useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import {GotoBack} from '../hooks/GotoBack'
import {checkDateOnline} from './store/storSlice';
import {useNavigate, Link, useLoaderData,useParams} from "react-router-dom";
const PostContent = () => {
    const posts = useSelector((post) => post.posts.posts)
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`http://localhost:3001/film_date?${posts.imdbID}_like`)
            .then(res=> res.json())
            .then(data=> setData(data))
        
        
            
    },[posts.imdbID])
    // console.log((data))
    
    const checkOnline = (nameFime) => {
        dispatch(checkDateOnline({nameFime}))

    }

    return(
        <div>
            
            {/* <button onClick={goBack}>Назад</button> */}
            <GotoBack/>
            <br/>
            {/* <img src={posts.Poster}/> */}
            <h1>
                {posts.Title}
            </h1>
            {/* <button >chek</button> */}
            <br/>
            {
                (data.length) != 0 ? 
                <Link to={`/posts/:${posts.imdbID}/buy_tickets`}>
                    <button onClick={()=>checkOnline(data
                    )}>Купить билет</button>
                </Link>
                : 
                <h2>Билетов на этот фильм нет в продаже</h2>
            }
        </div>
    )
}

// const tiketLoder = async ({request,params}) => {
    
//     // console.log({request, params})
//     const res = await fetch(`http://localhost:3001/film_date?${id}_like`)
//     return res.json()
// }

export {PostContent};