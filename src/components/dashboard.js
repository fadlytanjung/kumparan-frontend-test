import React, { Component } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import { Switch,Route} from 'react-router-dom';
import '../css/App.css';
import bg from '../sources/bg.jpeg';
import usrpic from '../sources/pic-user.jpg';
import detailpost from './detailpost';
import post from './post';
import users from './users';
import detailusers from './detailusers';
import albums from './albums';
import detailalbums from './detailalbums';
import error from './error';

class dashboard extends Component{
    
    render(){
        return(
            <Container className='p-t-80'>
                <Row>
                    <Col xs={12} md={3} className='leftside p-b-10'>
                        <div className='container-left'>
                            <img width={"100%"} alt='background' src={bg} />
                            <Row>
                                <Col md={3}>
                                    <img width={80} alt='user' className='userpic' src={usrpic} />
                                </Col>
                                <Col md={9}>
                                    <p className='name-user'>Fadly Tanjung</p>
                                    <p className='email-user'>fadlysyah96@gmail.com</p>    
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <p className='total-post'>Total Post:</p>
                                    <p className='number-total'>123</p>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                    <Col xs={12} md={7}>
                        <div className='timeline p-b-10'>
                        <Switch>
                            <Route exact path="/"component={post}></Route>
                            <Route path="/post/:id" component={detailpost} ></Route>
                            <Route path="/users" component={users} ></Route>
                            <Route path="/user/:id" component={detailusers} ></Route>
                            <Route path="/albums" component={albums} ></Route>
                            <Route path="/album/:id" component={detailalbums} ></Route>
                            <Route component={error} ></Route>
                        </Switch>
                        </div>
                        <p className='text-center footer-font'>
                            <b>MFT</b> 2019 &copy; - All reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default dashboard;