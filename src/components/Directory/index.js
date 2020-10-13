import React from 'react';
import ShopMen from './../../assets/men+.jpg';
import ShopWomen from './../../assets/women+.jpg';
import './style.scss';

const Directory = (props) => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item">   
                    <img src={ShopWomen} alt="women"/>
                    <div>
                        <a>Shop Women's</a>
                    </div>
                </div>
                <div className="item">
                    <img src={ShopMen} alt=""/>
                    <div>
                        <a>Shop Men's</a>
                    </div>
                    
                </div>
            </div>  
        </div>
    );
}
 
export default Directory;