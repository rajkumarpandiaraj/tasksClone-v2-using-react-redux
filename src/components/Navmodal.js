import React from 'react';
import logo from '../assets/logo.png';
import '../assets/all.min.css';
import '../assets/modal.css';
import { connect } from 'react-redux';

function Navmodal(props) {
    const { isModalOpened} = props
    return (
        <div className='modal' >
            <div className='modal-container' style={isModalOpened ? {animationName : 'modalOpen'} : {animationName : 'modalClose'} }>
                <div className='logo-brand'>
                    <img src={logo} alt='logo'/>
                    <p className='modal-brand-name'>GoogleTasks</p>
                </div>
                <hr className='line-break'/>
                <ul className='board '>
                    <li className='main-board board-item'>
                        <i className='far fa-clipboard icon'></i>
                        <span>Main board</span>
                    </li>
                    
                    <li className='add-board board-item'>
                        <div className='plus'>
                        <i className='fas fa-plus icon'></i>
                        </div>
                        <span>Add board</span>
                    </li>
                </ul>
                <hr className='line-break'/>
                <div className='premium'>
                    <div className='premium-text'>
                        <div className='star'>
                            <i className='fas fa-star icon'></i>
                        </div>
                        <p>Try Premium for free</p>
                    </div>
                </div>
                <hr className='line-break-last'/>
                <div className='task-board'>
                    <h4>TasksBoard</h4>
                    <ul className='list'>
                        <li className='item'>TasksBoard Premium pricing</li>
                        <li className='item'>Terms of service</li>
                        <li className='item'>Billing terms</li>
                        <li className='item'>Privacy policy</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        isModalOpened : state.isModalOpened,
    }
}

export default connect(mapStateToProps)(Navmodal)
