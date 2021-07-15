import { getInitialData } from '../utils/api'
import { getUsers } from './users'
import { getTweets } from './tweets'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const RECEIVE_DATA = "RECEIVE_DATA"

export function receiveInitialData(tweets, users, authedUser=null) {
    return{
        type: RECEIVE_DATA,
        tweets,
        users,
        authedUser
    }
}
export function handleInitialData(){
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(getTweets(tweets))
                dispatch(getUsers(users))
                dispatch(setAuthedUser("tylermcginnis"))
                dispatch(hideLoading())
            })
    }
}