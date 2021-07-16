import React from 'react'
import { Button, Container, Row, Col } from "react-bootstrap"
import { handleSaveTweet } from '../actions/tweets'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class NewTweet extends React.Component {
    state = {
        toHome: false
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const text = this.input.value
        this.input.value = ""
        const { id } = this.props
        this.props.dispatch(handleSaveTweet(text, id))
        this.setState({ toHome: id ? true: false })
    }
    render() {
        if(this.state.toHome){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Compose New Tweet</h3>
                <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <textarea 
                            placeholder={"what's happening?"} 
                            type="text" 
                            rows={5} 
                            cols={58}
                            ref={input => this.input = input} 
                            maxLength={280}/>
                            
                        <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}


export default connect(state => {
    return{
        authedUser: state.authedUser
    }
})(NewTweet)