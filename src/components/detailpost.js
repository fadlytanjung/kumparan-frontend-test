import React, { Component } from 'react';
import { PATH_BASE} from '../api';
import { Row,Col,Form,Button} from 'react-bootstrap';
import '../css/App.css';
import axios from 'axios';

class detailpost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            comments:[],
            postcomment:[],
         }
    }

    componentDidMount(){
        axios.get(`${PATH_BASE}comments`)
        .then((response)=>{
            const comments = response.data;
            var id = this.state.id
            let temp
            this.setState({comments})
            this.state.comments.filter( function (user) {
                return user.postId === Number(id);
              }).map((item)=>{                  
                  temp = [item, ...this.state.postcomment]
                  return this.setState({ postcomment:temp});
              })

        });

    }

    render(){
        return(
            <div className='timeline p-b-10'>
                <div className='comment-content' >
                    <p className='title-post' >Judul</p>
                    <p className='body-post' >body</p>
                </div>
                
                <div className='p-l-10'>comments</div>
                {this.state.postcomment.map((item,index) =>
                <div className='post-content' key={item.id}>
                    <p className='title-comment' ><b>{item.name}</b> | {item.email}</p>
                    <p className='body-post' >{item.body}</p>
                </div>
                )}
                <div className='container-post p-10'>
                    <Row>
                        <Col md={12}>
                        Add comments
                        <Form>
                        <Form.Group >
                            <Form.Control 
                            className='font-sm'
                            type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control 
                            className='font-sm'
                            type="text" placeholder="Email" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control className='font-sm'
                            as="textarea" rows="3"
                            type="text" placeholder="Comment" />
                        </Form.Group>

                        <Button className='float-right btn-post font-sm' type="submit">
                            <i className='fa fa-comment'></i> Comment
                        </Button>
                        </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default detailpost;