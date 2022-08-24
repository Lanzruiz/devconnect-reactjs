import axios from "axios";
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR} from './types'
import setAuthToken from '../utils/setAuthToken';


const baseUrl = 'http://localhost:5000' 

// Load User

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try { 
        
        const res = await axios.get(`${baseUrl}/api/auth`)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
}


// Register User

export const register = ({name, email, password}) => async dispatch => {
    const newUser = {
        name,
        email,
        password
    }

    try {
        
        // const res = await axios('/api/users', newUser, config);
        const res = await axios.post(`${baseUrl}/api/users`, newUser)
        // .then(res => {
           
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        // })
                  
    } catch (err) {
        
        const errors = err.response.data.errors;

        console.log('its error',err)
        
        if(errors) {
           errors.forEach(errors => dispatch(setAlert(errors.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL,
            
        })
    }
}
