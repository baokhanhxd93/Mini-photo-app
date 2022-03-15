import React from "react"
import { NavLink } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import './Header.scss'

Header.propTypes = {}

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="http://zing.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Easy Frontend
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact="true"
                            className={({ isActive }) => "header__link" + (isActive ? '--active' : '')}
                            to="/photos"
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header