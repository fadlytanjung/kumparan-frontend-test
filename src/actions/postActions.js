import { FETCH_POST, NEW_POST } from './type';
// import axios from 'axios';
import { PATH_BASE} from '../api';

export const fetchPost = ()=>dispatch=>{
    fetch(`${PATH_BASE}posts`)
    .then(res => res.json())
    .then(posts => dispatch({
            type:FETCH_POST,
            payload:posts  
        })
    );     
};

export const createPost = postData =>dispatch=>{
    fetch(`${PATH_BASE}posts`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
            type:NEW_POST,
            payload:post  
        })
    );     
};