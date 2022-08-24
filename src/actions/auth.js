import axios from "axios";
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL} from './types'
// Register User

export const register = ({name, email, password}) => async dispatch => {
    const newUser = {
        name,
        email,
        password
    }

    try {
        const baseUrl = 'http://localhost:5000'  
        
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
