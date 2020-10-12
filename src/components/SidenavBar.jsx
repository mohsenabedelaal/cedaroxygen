import React from 'react';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText } from 'react-sidebar-ui';
// Be sure to include styles at some point, probably during your bootstraping
import '../components/SidenavBar.css';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Home from './Home';


const SidenavBar = (props) => {
    // console.log(props.handleLogout)
    // console.log(props.user)
    return (
        <div>
            <Sidebar bgColor='black' isCollapsed={true}>
                <Logo
                    image='https://cedaroxygen.com/wp-content/uploads/2020/06/Cedar-Oxygen_Logo.png'
                    imageName='react logo' />
                <LogoText>Cedars Oxygen</LogoText>

                {/* <DropdownItem
                    values={['First', 'Second', 'Third']}
                    bgColor={'black'}>
                    Menu
                  </DropdownItem> */}

                <Item bgColor='black'>
                    <Icon><i className="fas fa-home" /></Icon>
                             Home
                 {/* <button onClick={()=>props.history.push('/home')}>try me</button> */}
                </Item>
                <Item bgColor='black'>
                    <Icon><i className="fas fa-info" /></Icon>
                             Profile
                </Item>
                <Item bgColor='black'>
                    <Icon><i className="fas fa-sitemap" /></Icon>
                    Request
                </Item>
                <Item bgColor='black'>
                    <Icon><i className="far fa-address-book" /></Icon>
                    Contacts
                </Item>
                <Item bgColor='black'>
                    <Icon><i className="fas fa-sign-out-alt" /></Icon>
                    <button className='btn btn-dark' onClick={props.handleLogout}>Logout</button>
                </Item>
                {/* <InputItem type='text' placeholder={'Search...'} /> */}
            </Sidebar>

        </div>
    )
}

export default SidenavBar;