import axios from 'axios';
const baseUrl = `http://${process.env.REACT_APP_MYURL}`;

const getAll = () =>{
    return axios.get(`${baseUrl}/get`);
}

const createReview = (obj) =>{
    return axios.post(`${baseUrl}/post`,obj)
}

const updateReview = (obj) =>{
    return axios.put(`${baseUrl}/update`,obj)
}

const deleteMovie = (ele) =>{
return axios.delete(`${baseUrl}/delete/${ele}`)
}

export default {getAll,createReview,updateReview,deleteMovie}