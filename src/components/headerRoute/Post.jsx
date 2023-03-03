import {useLoaderData, Link, NavLink} from 'react-router-dom';
import './Post.css'
import {useDispatch} from 'react-redux';
import {checkPosts} from "../store/storSlice"

const  Post = () => {
    const dispatch = useDispatch();
    const checkPostEdit = (Title,imdbID,Poster) => {
        dispatch(checkPosts({Title,imdbID,Poster}))
    }
    const posts = useLoaderData();
    const idDate = new Date().toString();
    return(
        <div>
            {posts.map(post => (
                <Link to={`/posts/${post.imdbID}`} 
                    // id="RouterNavLink" 
                    key={post.imdbID} 
                    className="box_post"
                        onClick={() => checkPostEdit(
                        post.Title,
                        post.imdbID,
                        undefined,
                )}>
                    <span>{post.Title}</span>
                </Link>
            ))}
        </div>
    )
};

const postLoader = async ({request,params}) => {
    // console.log({request, params})
    // const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    const res = await fetch('http://localhost:3001/media?_limit=10')
    // http://localhost:3001/sinema
    // http://localhost:3001/media
    return res.json()
}


export {Post,postLoader};