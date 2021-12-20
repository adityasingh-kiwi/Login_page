import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { genericFalse, genericTrue } from './Const';


const Login = (props) => {
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userPassword: ""

  })
  const [iserror,setIsError]=useState(genericFalse)

  const [errorData, setError] = useState(genericFalse)
  const [isLogin,setIsLogin]= useState(genericFalse)

  let Naviagte = useNavigate();

  const handleChange = (e) => {
    setIsError(genericFalse)
    


    setData({ ...data, [e.target.name]: e.target.value })

  }

  
  




  const handleLogin = async (e) => {


    e.preventDefault();
    
    

    localStorage.setItem('data', data.userEmail)

    try {
      


      const { userName,userEmail, userPassword } = data;
      if(userEmail==""||userPassword=="")
      {
        setIsError(genericTrue)
        return genericFalse
      }
      setError(genericFalse)

        const rest = await fetch("https://login-page-9c380-default-rtdb.asia-southeast1.firebasedatabase.app/loginpage.json", {
          method: "POST",
          headers: {
            "Content-type": "application/json",

          },
          body: JSON.stringify({
            userName,
            userEmail,
            userPassword

          })
        })

        if (rest.status == 200) {
          Naviagte("/home");

        } else {
          setError(genericTrue)
        }

      


    } catch (error) {

    }





  }
  return (
    <div className="login_page">



      <section className="">

        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-5 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ "bordeRadius": "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5"> Enter Your Details</p>

                    {/* <div className="form-outline form-white mb-4">
                      <input name="userName" type="text" id="typeEmailX" className="form-control form-control-lg" value={data.userName} onChange={handleChange} placeholder="username" required />
                      <label className="form-label" for="userName" >Name</label>
                    </div> */}
                   
                    <div className="form-outline form-white mb-4">
                      <input name="userEmail" type="email" id="typeEmailX" className="form-control form-control-lg" required value={data.userEmail} onChange={handleChange} placeholder="email id"  />
                      <label className="form-label" for="userEmail" >Email</label>
                      <p>{iserror.userEmail}</p>
                    </div>
                   
                    <div className="form-outline form-white mb-4">
                      <input name="userPassword" type="password" id="typePasswordX" className="form-control form-control-lg" required value={data.userPassword} onChange={handleChange} placeholder="password"  />
                      <label className="form-label" for="userPassword">Password</label>
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                     {iserror ? <div className='error-msg'> 
                       Please fill all the fields
                     </div> :null}
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleLogin}>Login</button>
                    



                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}




export default Login
