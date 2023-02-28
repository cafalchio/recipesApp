import axios from "axios";
import { Token } from '../models/token';
import { useStore } from "../stores/store";

const refreshToken = async () => {
    const { commonStore : { setAccessToken, setRefreshToken } } = useStore();
    
    try {
            let token  = await axios.post<Token>(
            "http://localhost:8000/api/token/refresh/",
            {
                refresh: localStorage.getItem("refreshToken"),
            });
            if (token.data) {
                setAccessToken(token.data.access);
                setRefreshToken(token.data.refresh);
                console.log("Token refreshed!");
                return true;
            } 
        } catch(error) {
            console.log(error);
            }
        return false;
    };

export default refreshToken;