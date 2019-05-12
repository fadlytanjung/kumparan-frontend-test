import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';

class albums extends Component{
    
    
    render(){
        
        return(
            <div>
            
            <div className='timeline p-b-10'>
            {this.props.albums.map((item,index) =>
                <div className='post-content' key={item.id}>
                    <p className='title-post' key={item.userId}>UserId {item.userId}</p>
                    <p className='body-post' key={item.title}>Albumn name: {item.title}</p>
                    <Link to={'/album/'+item.id} >
                        <Button className='detail-post'>
                        <i className='fa fa-info-circle'></i> See Photos
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
    let data = []
    // let temp
    // state.data.users.map((item)=>{
    //     axios.get('https://jsonplaceholder.typicode.com/albums?userId='+item.id)
    //         .then((response)=>{
    //             // data[String(1)] = response.data
    //             temp = response.data
    //             data = [temp,...data]

    //         })
    // })
    // var datas = state.data.albums.find(element => element.userId == 1)
    // console.log(datas)
    return {
        albums:state.data.albums,
        data:data
    }
}
export default connect(mapStateToProps)(albums);
