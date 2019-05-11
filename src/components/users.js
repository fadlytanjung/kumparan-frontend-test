import React, { Component } from 'react';
import { PATH_BASE} from '../api';
import { Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import axios from 'axios';

class users extends Component{

    constructor(props){
        super(props);
        this.state={
            users : []
        }
    }

   
    componentDidMount(){
        axios.get(`${PATH_BASE}users`)
        .then((response)=>{
            const users = response.data;
            
            this.setState({users})
        })
        console.log(this.props)
    }

    render(){
        return(
            <div>
            
            <div className='timeline p-b-10'>
            {this.state.users.map((item,index) =>
                <div className='post-content' key={item.id}>
                    <p className='title-post' key={item.name}>{item.name}</p>
                    <p className='body-post' key={item.email}>{item.email}</p>
                    <p className='body-post' key={item.phone}>{item.phone}</p>
                    <Link to={'/user/'+item.id} >
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

export default users;