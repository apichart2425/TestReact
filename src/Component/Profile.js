import React, { Component } from 'react';
import { Link } from 'react-router'

import Navbar from './Navbar';
import '../Css/profileStyle.css';

class Profile extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-5 fontSize" >
                    <div class="row">
                        <div class="col-3">
                            <img src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png" class="img_profile" alt="" />
                        </div>
                        <div class="col-9 border border-warning">
                            <div class="row border border-danger">
                                <div class="col-4 border border-danger">
                                    <h3>ชื่อ - นามสกุล :</h3>
                                </div>
                                <div class="col-8 border border-danger">
                                    <h3>Apichart chai</h3>
                                </div>
                            </div>
                            <div class="row border border-primary">
                                <div class="col-3 border border-primary">
                                    <h3>อายุ :</h3>
                                </div>
                                <div class="col-3 border border-primary">
                                    <h3>xx</h3>
                                </div>
                                <div class="col-3 border border-primary">
                                    <h3>วันเกิด :</h3>
                                </div>
                                <div class="col-3 border border-primary">
                                    <h3>xx/xx/xx</h3>
                                </div>
                            </div>
                            <div class="row border border-success">
                                <div class="col-3 border border-success">
                                    <h3>ตำแหน่ง :</h3>
                                </div>
                                <div class="col-3 border border-success">
                                    <h3> xxxx </h3>
                                </div>
                                <div class="col-3 border border-success">
                                    <h3>เงินเดือน :</h3>
                                </div>
                                <div class="col-3 border border-success">
                                    <h3>0.00</h3>
                                </div>
                            </div>
                            <div class="row border border-danger">
                                <div class="col-3 border border-danger">
                                    <h3>เบอร์โทรศัพท์ :</h3>
                                </div>
                                <div class="col-9 border border-danger">
                                    <h3>0896541563</h3>
                                </div>
                            </div>
                            <div>
                                <h3>ที่อยู่ :</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatem itaque, iste laboriosam, cum consequuntur in voluptas facilis animi optio, tempora natus molestiae modi? Et quaerat ea qui dolores neque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, animi? Hic doloremque, similique, culpa nam veritatis corporis id consequuntur amet facilis ducimus fuga cumque? Id voluptas odio beatae asperiores in.</p>
                            </div>
                        </div>


                    </div>
                    <div >
                        <h2>Content</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsum a ex fugit dolorum! Laborum minima accusantium iusto unde. Rem quam saepe architecto maxime fugiat excepturi corrupti iusto sint repudiandae?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem debitis, praesentium eveniet sed, impedit, cumque ea quibusdam autem doloribus illo! Sed, tempore! Eligendi, minus eum? Dignissimos commodi ullam adipisci!</p>
                    </div>
                </div>
            </div>
        )
    }
}
// 
export default Profile;