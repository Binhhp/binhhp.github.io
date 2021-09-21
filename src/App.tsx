import { BrowserRouter as Router } from 'react-router-dom';
import Route from './routes/route';
import './assets/style.css';
import React, { Suspense } from 'react';
import Header from './layouts/Header';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./shared/Loading"

toast.configure();
export default function App() {

    return (
        <React.Fragment>
            <Router>
                <Header />
                <Suspense fallback={<Loading />}>
                    <Route />
                </Suspense>
            </Router>
            <ToastContainer 
                autoClose={2000} 
                closeButton={true} 
                hideProgressBar={false} 
                position={'top-right'} />
        </React.Fragment>
    )
}

