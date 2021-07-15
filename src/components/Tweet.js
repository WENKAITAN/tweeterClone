import React from 'react'
import { connect } from "react-redux"
import { Card, Container, Row, Col, } from "react-bootstrap"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai' 
import { GoReply } from 'react-icons/go' 
import { handleToggleLike } from '../actions/tweets'
import { Link, withRouter } from 'react-router-dom'
class Tweet extends React.Component {
    timeConverter = (UNIX_timestamp) => {        
        var s = new Date(UNIX_timestamp).toLocaleDateString("en-US")
        var h = new Date(UNIX_timestamp).toLocaleTimeString("en-US")
        var time = h + " | " + s;
        return time;
      }

    toggleLike = (id, hasLiked, authedUser) => {
        console.log(id, hasLiked, authedUser)
        const info = {id, hasLiked, authedUser}
        this.props.dispatch(handleToggleLike(info))
       
    }
    render() {
        const {tweets, users, id, authedUser} = this.props
        const tweet = tweets[id]
        const { author, replyingTo, likes, text, replies, timestamp  } = tweet
        const avatarURL = users[author] && users[author]["avatarURL"] ?  users[author]["avatarURL"] : null
        const name = users[author] && users[author]["name"] ? users[author]["name"] : null
        return(
            <Link to={`/tweet/${id}`}>
            <Container style={{marginBottom: "20px"}}>
                <Row>
                    <Col md={{ span: 9, offset: 3 }}>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <img src={avatarURL} alt={"avatar"} className="avatar" />
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.timeConverter(timestamp)}</Card.Subtitle>
                                {tweets[replyingTo] && tweets[replyingTo].author 
                                ? <Card.Subtitle className="mb-2 text-muted">Replying to @{tweets[replyingTo] && tweets[replyingTo].author}</Card.Subtitle> 
                                : null 
                                }
                                <Card.Text>
                                {text}
                                </Card.Text>
                                <span>
                                    <button><GoReply style={{size: "20px"}}/>{replies.length > 0 ? replies.length : null}</button>
                                    
                                </span>
                                
                                <span  style={{marginLeft: "20px"}}>
                                    {likes.includes(authedUser) 
                                    ? <button onClick={() => this.toggleLike(id, true, authedUser)}><AiFillHeart />{likes.length >0 ? likes.length : null}</button>
                                    : <button onClick={() => this.toggleLike(id, false, authedUser)}><AiOutlineHeart /> {likes.length >0 ? likes.length : null}</button>}
                                </span>
                                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            </Link>
        )
    }
}

function mapStateToProps({tweets, users, authedUser}, {id}){
    return{
        tweets,
        users,
        authedUser,
        id
    }
}

export default withRouter(connect(mapStateToProps)(Tweet))