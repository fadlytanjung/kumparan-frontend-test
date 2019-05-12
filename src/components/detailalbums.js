import React, { Component } from 'react';
import { PATH_BASE} from '../api';
import { Row,Col,Button,Modal} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/App.css';
import axios from 'axios';

class detailalbums extends Component{
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            photos :[],
            show:false,
            title:'',
            url:''
        }
    }

    componentDidMount(){
        axios.get(`${PATH_BASE}photos?albumId=`+this.props.id)
        .then((Response)=>{
            this.setState({photos:Response.data})
        })

    }

    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow(url,title) {
        this.setState({ show: true,title:title,url:url });
    }
    
    render(){
        
        return(
            <div className='timeline p-b-10'>
                <div className='post-content' >
                    <h2>Album ID : {this.props.id}</h2>
                    <Row className='m-r-0'>
                        {this.state.photos.map((item)=>
                        <Col md={3} className='p-0' key={item.id}>
                            <div className='photo-tumb'>
                                <img alt='loads iiimmagee' width={'100%'} src={item.thumbnailUrl}></img>
                                <p className='font-sm'>{item.title}</p>
                                
                                    <Button className='detail-post'
                                        onClick={this.handleShow.bind(this, item.url,item.title)}
                                    >
                                    <i className='fa fa-info-circle'></i> Detail
                                    </Button>
                                
                            </div>
                        </Col>
                        )}
                    </Row>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img alt='loading....' width={'100%'} src={this.state.url}></img>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/albums'>
                        <Button variant="danger" className='float-left' onClick={this.handleClose}>
                        Kembali
                        </Button>
                        </Link>
                        <Button variant="primary" onClick={this.handleClose}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            
            
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    let id = ownProps.match.params.id;
    
    return {
        photo:state.data.albums.find(post=>post.id===Number(id)),
        id:id
    }
}

export default connect(mapStateToProps)(detailalbums);