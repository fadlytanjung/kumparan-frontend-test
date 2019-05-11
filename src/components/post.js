import React, { Component } from 'react';
// import { PATH_BASE} from '../api';
import { Row,Col,Form,Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';
// import PropTypes from 'prop-types';

// import axios from 'axios';
class post extends Component{

    constructor(props){
        super(props);
        this.state={
            posts : [],
            username:{},
            title:'',
            body:''
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        console.log('aaa')
        console.log(this.state.title)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    // componentDidMount(){
    //     axios.get(`${PATH_BASE}posts`)
    //     .then((response)=>{
    //         const posts = response.data;
            
    //         this.setState({posts})
    //     })
        
    // }
    // onSubmit(e){
    //     e.preventDefault();
    //     console.log(this.state.title);
    //     console.log('aaa')
    // }
    componentWillMount(){
        this.props.fetchPost();
    }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.newPost){
    //         this.props.posts.unshif(nextProps.newPost)
    //     }
    // }
    render(){
        return(
            <div>
            <div className='container-post p-10'>
                <Row>
                    <Col md={12}>
                    <Form /*onSubmit={this.onSubmit}*/>
                    <Form.Group >
                        <Form.Control 
                        className='font-sm'
                        type="text" placeholder="Title of post" 
                        // onChange={this.onChange}
                        // value={this.state.title}
                         />
                    </Form.Group>

                    <Form.Group >
                        <Form.Control className='font-sm'
                        as="textarea" rows="3"
                        type="text" placeholder="Body of post" 
                        /*onChange={this.onChange}*/
                        value={this.state.body}/>
                    </Form.Group>
                    <Button className='float-right btn-post font-sm' onClick={this.onClick}>
                        <i className='fa fa-paper-plane'></i> Post
                    </Button>
                    </Form>
                    </Col>
                </Row>
            </div>
            <div className='timeline p-b-10'>
            {this.props.posts.map((item,index) =>
                <div className='post-content' key={item.id}>
                    <p className='title-post' key={item.title}>{item.title}</p>
                    <p className='body-post' key={item.body}>{item.body}</p>
                    <Link to={'/post/'+item.id} >
                        <Button className='detail-post'>
                        <i className='fa fa-info-circle'></i> Detail
                        </Button>
                    </Link>
                </div>
            )}
            </div>
            </div>
        )
    }
}

// post.PropTypes = {
//     fetchPost:PropTypes.func.isRequired,
//     posts:PropTypes.array.isRequired
// }
const mapStateToProps = state =>({
    posts:state.posts.items
})
export default connect(mapStateToProps,{fetchPost})(post);