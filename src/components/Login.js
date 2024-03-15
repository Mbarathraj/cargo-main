import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const Navi = useNavigate()
    function handleReg() {
        Navi('/Registration')
    }
    const handleLogin = () => {

        const data =
        {
            Name: name,
            PhoneNumber: phoneNumber,

        };
        const url = 'https://localhost:44383/api/Test/Login';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert('error');
        })

    }
    return (
        // <Fragment>
        //     <div>login</div>
        //     <label>Username </label>
        //     <input type="text" name="uname" placeholder='Enter your name' id='txtName' onChange={(e) => handleNameChange(e.target.value)} />
        //     <br>
        //     </br>
        //     <label>Phone Number </label>
        //     <input type="text" name="uname" placeholder='Enter your phone number' id='txtName' onChange={(e) => handlePhoneNoChange(e.target.value)} />
        //     <br>
        //     </br>
        //     <button onClick={() => handleLogin()}>Login</button>
        // </Fragment>
        <div className='Registration'>
            <h1>Cargo Manager System</h1>
            <div className="container1">
                <h1>Create Account</h1>
                <form onSubmit={handleLogin}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="Phone">Phone NO :</label>
                    <input
                        type="number"
                        id="Phone"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button className='btn1' type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <span className='siginbtn' onClick={() => handleReg()}>Register</span>
                </p>
            </div>
        </div>
    )
}
export default Login;