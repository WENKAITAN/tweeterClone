import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'

class TweetPage extends React.Component {
    render() {
        
        const { id, replies } = this.props
        console.log(id)
        return(
            <div>
                <Tweet id={id}/>
                <NewTweet id={id}/>
                {replies.length > 0 && <h3 style={{textAlign: 'center'}}>Replies</h3>}
                <ul>
                    {replies.map(uid => (
                        <Tweet id={uid} key={uid}/>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({tweets}, props) {
    const { id } = props.match.params
    return{
        id, 
        replies: !tweets[id] ? [] : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(TweetPage)