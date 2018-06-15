import './Nav.css'
import React from 'react'


import NavItem from './NavItem'

export default props =>
    <nav className="menu">
        <NavItem url="/" icon="home" label="Início" />
        <NavItem url="/users" icon="users" label="Usuários" />

    </nav>