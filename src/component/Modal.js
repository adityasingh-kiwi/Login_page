import React, { useState } from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Modal, Button } from 'antd';
import './Modal.css';

const ModalOne = ({ isopen, isOpenClose }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataModal, setDatamodal] = useState({
        firstName: "",
        lastName: "",
        userEmail: ""

    })

    const handleModalchange=(e)=>{

    setDatamodal({...dataModal,[e.target.name]:e.target.value})
    }


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        console.log("hhhhhhh");
        isOpenClose(false);
        // setIsModalVisible(false);
    };

    const handleCancel = () => {
        isOpenClose(false);
    };

    // const handleChange = (e) => {

    //     console.log("e------------->>>", e.target.value, e.target.name);
    //     setData({ ...data, [e.target.name]: e.target.value })

    // }

    console.log("isopenisopenisopenisopen---------------------------->>>", isopen)
    return (
        <>

            <Modal title="Update the User Details" visible={isopen} onOk={handleOk} onCancel={handleCancel}>
                <div className="form">
                    <form >
                        <div>
                        First Name:<input type="text" name="userName" className="user"type="text" value={dataModal.firstName} onChange={handleModalchange} placeholder="firstname" required />

                        Last Name :<input type="text"name="lastName" className="user"type="text" value={dataModal.lastName} onChange={handleModalchange} placeholder="Lastname" required />
                        </div>
                        <div>
                        Email id:<input type="Email"name="userEmail" className="user"type="email" value={dataModal.userEmail} onChange={handleModalchange} placeholder="email id" required />
                        </div>
                        <div>
                     <span>
                        Gender: <input type="radio" name="gender" value="male" /> Male
                        <input type="radio" name="gender" value="female" /> Female<br />
                        <input type="radio" name="gender" value="other" /> Other
                        </span>
                        </div>
                        <div>
                       Upload photo: <input type="file" name="fileupload" accept="image/*" />
                        </div>
                        
                        
                        
                       
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default ModalOne;