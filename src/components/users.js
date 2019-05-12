import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';


class users extends Component{

    
    render(){
        return(
            <div>
            
            <div className='timeline p-b-10'>
            {this.props.users.map((item,index) =>
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
const mapStateToProps = (state) =>{
    
    return {
        users:state.data.users
    }
}
export default connect(mapStateToProps)(users);