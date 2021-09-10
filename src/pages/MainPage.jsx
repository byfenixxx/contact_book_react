import React from 'react';
import CustomTable from '../components/CustomTable';
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainPage = () => {
    return (
        <div>
            MainPage
            <Link to="/add"><Button >Add link</Button></Link>
            <CustomTable />
            <ToastContainer />
        </div>
    );
};

export default MainPage;