import React, { Component } from 'react';
import { Row,Col,Form,Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost,fetchAllPosts,deletePost } from '../actions/index';

class post extends Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.state = {
            userId:0,
            title:'',
            body:''
        }
    }

    componentWillMount(){
        this.props.fetchAllPosts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.post){
            this.props.posts.unshift(nextProps.post)
            this.setState({title:'',body:''})
        }
    }
    onChange(e){
        this.setState({ [e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            userId:this.state.userId,
            title:this.state.title,
            body:this.state.body
        }

        this.props.createPost(post);
    }

    deletePost(id){
        
        console.log('Maaf sementara Belum Bisa delete')
        console.log(this.props.countPost+=1)
        // this.props.deletePost(id);
        // this.setState(newState); // This will update the state and trigger a rerender of the components
    }

    render(){
        const idDel = 0;
        return(
            <div>
            <div className='container-post p-10'>
                <Row>
                    <Col md={12}>
                    <Form>
                    <Form.Group >
                        <Form.Control 
                        className='font-sm'
                        type="text" placeholder="Title of post" 
                        onChange={this.onChange.bind(this)}
                        value={this.state.title}
                        name='title'
                         />
                    </Form.Group>

                    <Form.Group >
                        <Form.Control className='font-sm'
                        as="textarea" rows="3"
                        type="text" placeholder="Body of post" 
                        onChange={this.onChange.bind(this)}
                        name='body'
                        value={this.state.body}
                       />
                    </Form.Group>
                    <Button className='float-right btn-post font-sm' onClick={this.onSubmit}>
                        <i className='fa fa-paper-plane'></i> Post
                    </Button>
                    </Form>
                    </Col>
                </Row>
            </div>
            <div className='timeline p-b-10' >
            {this.props.posts.map((item,index) =>
                <div className='post-content' key={item.id}>
                    <p className='title-post' key={item.title}>{item.title}</p>
                    <p className='body-post' key={item.body}>{item.body}</p>
                    <Link to={'/post/'+item.id} >
                        <Button className='detail-post'>
                        <i className='fa fa-info-circle'></i> Detail
                        </Button>
                    </Link>
                    {idDel === item.userId ? <Button 
                    variant='danger'
                    onClick={()=>this.deletePost(item.id)}
                    className='delete-post'>
                        <i className='fa fa-trash'></i> Hapus
                        </Button>:<p></p>}
                </div>
            )}
            </div>
            </div>
        )
    }
}

post.PropsTypes = {
    fetchAllPosts:PropsTypes.func.isRequired,
    posts:PropsTypes.array.isRequired,
    post:PropsTypes.object

}
const mapStateToProps = (state) =>{
    return {
        posts:state.data.posts,
        post:state.data.post,
        countPost:state.data.countPost
    }
}
export default connect(mapStateToProps,{createPost,fetchAllPosts,deletePost})(post);