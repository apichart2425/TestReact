import React, { Component } from 'react';
import { Link } from 'react-router'

import Navbar from './Navbar';
import '../Css/profileStyle.css';

class Profile extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-5" >
                    <div class="row">
                    <div class="col-4">
                        <img src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png" class="img_profile" alt=""/>
                    </div>
                    <div class="col-8 border border-warning">
                        <div class="col-4 border border-danger">
                            <h1>Name</h1>
                        </div>
                        <div class="col-4 border border-danger">
                            <h1>Name</h1>
                        </div>
                        <div class="col-4 border border-danger">
                            Apichart
                        </div>
                    <table className="fontSize">
                            <tr>
                                <th>ชื่อ - สกุล :</th>
                                <td> Apichart </td>
                                <td>Chaina</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>อายุ</th>
                                <td> xx </td>
                                <th>วันเกิด</th>
                                <td> xx/xx/xx </td>
                            </tr>
                            <tr>
                                <th>ตำแหน่ง</th>
                                <td> XX </td>
                                <th>เงินเดือน</th>
                                <td> 0.00 </td>
                            </tr>
                            <tr>
                                <th>เบอร์โทร</th>
                                <td colSpan="3"> 08999999</td>
                            </tr>
                            <tr>
                                <th>Flavor</th>
                                <td>Mint</td>
                                <td>Walnut</td>
                            </tr>
                        </table>
                    </div>
                        
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsum a ex fugit dolorum! Laborum minima accusantium iusto unde. Rem quam saepe architecto maxime fugiat excepturi corrupti iusto sint repudiandae?</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// 
export default Profile;