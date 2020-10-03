import React, { Component } from 'react';
import '../assets/all.min.css';
import logo from '../assets/logo.png';
import '../assets/nav.css';
import '../assets/modal.css';
import { connect } from 'react-redux';
import { modalHandle, orientationHandle } from '../redux/action';

const focusStyle ={
    backgroundColor : '#fff',
    color : '#0000',
    boxShadow : `rgba(65, 69, 73, 0.3) 0 1px 1px 0,
                rgba(65, 69, 73, 0.15) 0 1px 3px 1px`
}

const blurStyle ={
    backgroundColor : 'rgb(241, 243, 244)',
    color : '#5F6368'
}

export class Nav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isInputFocused : false
        }
    }
    
    handleFocus = ()=>{
        this.setState({
            isInputFocused: !this.state.isInputFocused
        })
    }
    handleBlur = ()=>{
        this.setState({
            isInputFocused: !this.state.isInputFocused
        })
    }
    render() {
        const {modalHandle, isModalOpened, orientationHandle} = this.props
        return (
            <>
            <div className='nav'>
                <div className='nav-container'>
                    <div className='brand'>
                        <div className='menu-icon'>
                            <i className=' fas fa-bars' onClick={modalHandle}></i>
                        </div>
                        <img src={logo} alt='logo'/>
                        <p className='brand-name'>GoogleTasks</p>
                    </div>
                    <form className='search' style={this.state.isInputFocused? focusStyle : blurStyle}>
                        <i className='fas fa-search'></i>
                        <input type='text' onBlur={this.handleBlur} onFocus={this.handleFocus} className='search-input' name='search' placeholder='Search'/>
                        <i className='fas fa-times' style={this.state.isInputFocused? {display : "inline-block"} : {display : "none"}}></i>
                    </form>
                    <div className='widgets'>
                        <i className='fas fa-cloud-upload-alt'  aria-hidden="true"></i>
                        <i className='fas fa-grip-horizontal' onClick={orientationHandle}></i>
                        <i className='fas fa-cog'></i>
                    </div>
                    <div className='mail-box'>
                        <span className='mail'>r</span>
                    </div>
                </div>
            </div>
            <div className='modal-bgc' onClick={modalHandle} style={ isModalOpened? {animationName : 'modalOpen'} : {animationName : 'modalClose'}}></div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isModalOpened : state.isModalOpened,
    }
}

const mapDispatchToPros = dispatch =>{
    return {
        modalHandle : () => dispatch(modalHandle()),
        orientationHandle : () => dispatch(orientationHandle()),
    }
}
export default connect(mapStateToProps, mapDispatchToPros)(Nav)
