import React from 'react';
import Footer from '../components/Footer';
import Header from './../components/header';
import './MainLayout.scss'

const MainLayout = (props) => {
    return (
        <div>
            <Header {...props}/>
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}
 
export default MainLayout;