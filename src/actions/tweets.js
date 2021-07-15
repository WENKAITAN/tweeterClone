import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading-bar"
export const GET_TWEETS = "GET_TWEETS"
export const TOGGLE_LIKE = "TOGGLE_LIKE"
export const ADD_TWEET = "ADD_TWEET"
export function getTweets(tweets){
    return{
        type: GET_TWEETS,
        tweets
    }
}

export function addTweet(tweet){
    return{
        type: ADD_TWEET,
        tweet
    }
}

export function handleSaveTweet( text, replyingTo){
    return(dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveTweet({ 
            text, 
            author: authedUser, 
            replyingTo 
        })
        .then((tweet) => {
            dispatch(addTweet(tweet))
        })
        .then(() => dispatch(hideLoading()))
        .catch((e) => {
            console.log("The error is ", e)
            alert("Something went wrong!")
        })
    }
}


export function toggleLike({id, hasLiked, authedUser}){
    return{
        type: TOGGLE_LIKE,
        id,
        hasLiked,
        authedUser
    }
}

export function handleToggleLike({id, hasLiked, authedUser}){
    return(dispatch) => {
        dispatch(toggleLike({id, hasLiked, authedUser}))
        return saveLikeToggle({id, hasLiked, authedUser})
            .catch((e) => {
                console.log("The error is ", e)
                dispatch(toggleLike({id, hasLiked, authedUser}))
                alert("Something went wrong!")
            })

    }
}