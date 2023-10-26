import React, { useState, useRef } from 'react';
import { Nav, Container, Offcanvas, Button, Navbar } from 'react-bootstrap';
import '../styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function BlogNavbar() {
    const navLinks = [
        { name: "Home", path: '/' },
        { name: 'Tech', path: '/posts' },
        { name: 'Love', path: '/calculator' },
        { name: "Spiritual", path: '/calculator' },
        { name: 'Travel', path: '/calculator' },
    ];

    // Offcanvas will be closed after a navlink on the offcanvas is clicked
    const offCanvasRef = useRef();

    const closeOffCanvas = () => offCanvasRef.current.backdrop.click();

    return (
        <>
            {['ad'].map((expand) => (
                <Navbar key={expand} expand={expand} className="navbar">
                    <Container fluid sticky="top" data-bs-theme="dark">
                        <Navbar.Brand className='text-align-end'>
                            <Nav.Link to='/'>
                                <span>blue</span>wonk
                            </Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            className='shadow-none border-0'
                        />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            ref={offCanvasRef}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Navbar.Brand href="#"><span>blue</span>wonk</Navbar.Brand>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    {navLinks.map((link, key) => (
                                        <Nav.Item className='fs-5' key={key}>
                                            <Nav.Link as={NavLink} to={link.path} onClick={closeOffCanvas}>
                                                {link.name}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                                <Nav className="justify-content-end">
                                    <Nav.Item className='fs-5'>
                                        <Nav.Link as={NavLink} to='/contact'>Me</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='fs-5'>
                                        <Nav.Link as={NavLink} to='/search'>&#x1F50E;&#xFE0E;</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar >
            ))
            }
        </>
    )
}

export default BlogNavbar;
