import React, { Component } from 'react';
import { PATH_BASE} from '../api';
import { Table} from 'react-bootstrap';
import '../css/App.css';
import axios from 'axios';

class detailusers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            user:[],
            address:[],
            geo:[],
            company:[],
         }
    }

    componentDidMount(){
        axios.get(`${PATH_BASE}users/${this.state.id}`)
        .then((response)=>{

            const user = response.data;
            const address = response.data.address
            const geo = response.data.address.geo
            const company = response.data.company
            console.log(user)
            this.setState({user,address,geo,company})
            
        });
    }

    render(){
        return(
            <div className='timeline p-b-10'>
                <div className='post-content' >
                <Table >
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>: {this.state.user.name}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>: {this.state.user.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>: {this.state.user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>: {this.state.user.phone}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>: {this.state.address.street+' '} 
                            {this.state.address.suite+', '} 
                            {this.state.address.city+' - '}
                            {this.state.address.zipcode+' | '}
                            Lat {this.state.geo.lat}, Long {this.state.geo.long} 
                            </td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>: {this.state.user.website}</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>: {this.state.company.name+' | '} 
                            {this.state.company.bs+' | '} 
                            {this.state.company.catchPhrase} 
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                
            </div>
            
        )
    }
}

export default detailusers;