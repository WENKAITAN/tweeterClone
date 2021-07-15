import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
class Dashboard extends React.Component {
    render() {
        const {tweetIds} = this.props
        return(
            <div>
                <h3 style={{textAlign: 'center'}}>Your Timeline</h3>
                {tweetIds.map((id) => (
                    <Tweet key={id} id={id}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({tweets}){
    return{
        tweetIds: Object.keys(tweets).sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)