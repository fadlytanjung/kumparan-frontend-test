import React, { Component } from 'react';
// import { PATH_BASE} from '../api';
import { Table} from 'react-bootstrap';
import { connect } from 'react-redux';
import '../css/App.css';
// import axios from 'axios';

class detailusers extends Component{

    render(){
        return(
            <div className='timeline p-b-10'>
                <div className='post-content' >
                <Table >
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>: {this.props.users.name}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>: {this.props.users.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>: {this.props.users.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>: {this.props.users.phone}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>: {this.props.users.address.street+' '} 
                            {this.props.users.address.suite+', '} 
                            {this.props.users.address.city+' - '}
                            {this.props.users.address.zipcode+' | '}
                            Lat {this.props.users.address.geo.lat}, Long {this.props.users.address.geo.lng} 
                            </td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>: {this.props.users.website}</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>: {this.props.users.company.name+' | '} 
                            {this.props.users.company.bs+' | '} 
                            {this.props.users.company.catchPhrase} 
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                
            </div>
            
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    let id = ownProps.match.params.id;
    return {
        users:state.data.users.find(post=>post.id===Number(id))
    }
}

export default connect(mapStateToProps)(detailusers);