import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { getTokens, onMessageListener } from "../firebase";
import firebase from "../firebase";
import { Modal, Button } from 'antd';
import './Modal.css';
import RequestService from "./api";
import { getToken } from '@firebase/messaging';
// import { getMessaging,getToken  } from "firebase/messaging";


const ModalOne = ({ isopen, isOpenClose, getdata }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataModal, setDatamodal] = useState({
        firstName: "",
        lastName: "",
        userEmail: ""

    })

    // const loader = async () => {
    //     console.log("getToken-------------->>",getToken);
    //     await getToken().then((webPushTokenFCM) =>{
    //         console.log("webpushhhh--------->>",webPushTokenFCM);

    //     })
    // }      
    // useEffect(()=>{

    //     loader();

    //     // const msg= firebase.messaging();

    //     //  msg.requestPermission().then(()=>{
    //     //       return msg.getTokens()
    //     //  }).then((data)=>{
    //     //         console.log("token",data)
    //     // })
    // },[])


    // useEffect(() => {
    //     let modifiedObject = { ...dataModal }
    //     modifiedObject["userEmail"] = getdata.email;
    //     setDatamodal(modifiedObject);

    // }, [])

    const handleModalchange = (e) => {

        setDatamodal({ ...dataModal, [e.target.name]: e.target.value })
    }


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {

        try {
            let userPassword = ""

            const { firstName,
                secondName,
                userEmail } = dataModal;
            console.log("getdata.id---------------1111->>>", getdata.id);
            let response = await RequestService.putOne(getdata.id, {
                firstName,
                secondName,
                userEmail,
                userPassword
            })
            console.log("response----------------------->>>,", response);
        } catch (error) {

        }
        isOpenClose(false);

    };

    const handleCancel = () => {
        isOpenClose(false);
    };



    
    return (
        <>

            <Modal title="Update the User Details" visible={isopen} onOk={handleOk} onCancel={handleCancel}>
                <div className="form">
                    <form >
                        <div>
                            First Name:<input type="text" name="firstName" className="user" type="text" value={dataModal.firstName} onChange={handleModalchange} placeholder="firstname" required />

                            Last Name :<input type="text" name="lastName" className="user" type="text" value={dataModal.lastName} onChange={handleModalchange} placeholder="Lastname" required />
                        </div>
                        <div>
                            Email id:<input type="Email" name="userEmail" className="user" type="email" value={dataModal.userEmail} onChange={handleModalchange} placeholder="email id" required />
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