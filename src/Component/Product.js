import React, { Component } from 'react';
import { Link } from 'react-router'

import Navbar from './Navbar';
import '../Css/profileStyle.css';
import '../Css/Product.css';


class Product extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-5 fontSize bg-product" >
                    <div class="row">
                        <div class="col-3">
                            <img src="https://stockx.imgix.net/products/streetwear/Supreme-Box-Logo-Hoodie-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1300" class="img_profile" alt="" />
                        </div>
                        <div class="col-9 my-4">
                            <div class="row ">
                                <div class="col-2 ">
                                    <h3>ชื่อสิ้นค้า:</h3>
                                </div>
                                <div class="col-4 ">
                                    <h3>xxxx</h3>
                                </div>
                                <div class="col-2 ">
                                    <h3>รหัสสินค้า:</h3>
                                </div>
                                <div class="col-4 ">
                                    <label>ID: </label>
                                    <label> DSSA-89</label>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-3 ">
                                    <h3>วันออกจำหน่าย :</h3>
                                </div>
                                <div class="col-3 ">
                                    <h3>xx</h3>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-3 ">
                                    <h3>ราคา :</h3>
                                </div>
                                <div class="col-3 ">
                                    <h3> xxxx </h3>
                                </div>

                            </div>
                            <div class="row ">
                                <div class="col-3 ">
                                    <h3>จำนวน :</h3>
                                </div>
                                <div class="col-9 ">
                                    <h3>xx</h3>
                                </div>
                            </div>
                            <div>
                                <a href="/edit&product" class="btn btn-danger disabled float-right my-3 mx-2 buttonSize">ลบ</a>
                                <a href="/edit&product" class="btn btn-warning float-right my-3 mx-2 buttonSize">แก้ไข</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;