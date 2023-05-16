import { useEffect,useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import {GotoBack} from '../hooks/GotoBack'
import {checkDateOnline} from './store/storSlice';
import postContentStyle from "./style/PostContent.module.css"
import {useNavigate, Link, useLoaderData,useParams} from "react-router-dom";
const PostContent = () => {
    const posts = useSelector((post) => post.posts.posts)
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);
    const [data, setData] = useState([]);
    const [discrt, setDiscrt] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`http://localhost:3001/media?imdbID=${posts.imdbID}`)
            .then(res=> res.json())
            .then(discrt=> setDiscrt(discrt))    
    },[posts.imdbID])
    
    useEffect(() => {
        fetch(`http://localhost:3001/film_date?${posts.imdbID}_like`)
            .then(res=> res.json())
            .then(data=> setData(data))
      
        
        
            
    },[posts.imdbID])

    const check_dicr = (dicr) => {
        // console.log(discrt[0]?.[dicr])
        if ((discrt[0]?.[dicr]) == undefined){
            return <></>
        }
        return (
            <p className= {postContentStyle.dicrt_text}>
               {dicr}: {(discrt[0]?.[dicr])}
            </p>
        )
    }
    
    // console.log((data))
    
    const checkOnline = (nameFime) => {
        dispatch(checkDateOnline({nameFime}))


    }
    const list_discr = [
        "Genre",
        "Rated",
        "Runtime",
        "Released",
        "imdbRating",
        "Country",
        "Writer",
        "Year",
    ]
    // console.log(discrt)
    return(
        <div className= {postContentStyle.block_post_main}>
            <div className= {postContentStyle.blcok_back_pay}>
                <div className= {postContentStyle.posit_back}>
                    <GotoBack/>
                </div>
                {
                (data.length) != 0 ? 
                <Link to={`/posts/:${posts.imdbID}/info_tickets`}>
                    <button className= {postContentStyle.posit_pay_tick} onClick={() => checkOnline(data)}>Выбрать билеты</button>
                </Link>
                    : 
                <div className= {postContentStyle.tick_not_pay}>
                    <h2>Билетов на этот фильм нет в продаже</h2>
                </div>    
                
            }
            </div>
            <img className= {postContentStyle.image_img_post} src={posts.Poster}/>
            <div className= {postContentStyle.dicript_film}>
                <h1 className= {postContentStyle.title_film}>
                    {posts.Title}
                </h1>
                <ul>
                    {/* {check_dicr("Genre")}
                    {check_dicr("Rated")}
                    {check_dicr("Runtime")} */}
                    {list_discr.map(dis => check_dicr(dis))}
                </ul>
            </div>
        </div>
    )
}

// const tiketLoder = async ({request,params}) => {
    
//     // console.log({request, params})
//     const res = await fetch(`http://localhost:3001/film_date?${id}_like`)
//     return res.json()
// }

export {PostContent};