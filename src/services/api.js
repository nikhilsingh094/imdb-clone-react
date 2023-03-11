import axios from 'axios';

export const categoryMovies = async(API_URL) =>{
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }catch(err){
        console.log("api error", err.message);
        return err.response.data;
    }
}