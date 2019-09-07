import axios from "axios";
import { GET_ERRORS } from "./types";

//Upload a post
export const uploadPost = (data, history) => dispatch => {
    console.log(data);
    axios.post("/api/posts/upload", data)
        .then(res => {
            console.log(res)
            history.push("/profile");
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            // console.log(err);
        });
};

// //Get all posts
// export const getAllPosts = () => dispatch => {
//     axios.get("/api/posts/uploads")
//         .then(res => {
//             // console.log(res.data);
//             // const postData = {};
//             res.json();
//             // for(let i = 0; i < res.data.length; i++){
//             //     postData.push(res.data[i]);
//             // }
//             // console.log(postData);
//             // console.log(res)
//             // res.json()
//             // res.json(res.data);
//             // return res.data;
//         })
//         .catch(err => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//             // console.log(err);
//         })
// };

// //Get users posts
// export const getUserPosts = (data) => dispatch => {
//     axios.get("/api/posts/uploads/:" + data.id)
//         .then(res => console.log(res))
//         .catch(err => {
//             // dispatch({
//             //     // type: GET_ERRORS,
//             //     // paytload: err.response.data
//             //     // console.log(err));
//             // })
//             console.log(err);
//         });
//     // console.log(data);
// };
