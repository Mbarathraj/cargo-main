import { Routes, Route } from "react-router-dom";
import Registration from '../components/Registration';
import Login from '../components/Login';

export function LoginRegister() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<Registration />} />
            </Routes>
        </div>
    );
}