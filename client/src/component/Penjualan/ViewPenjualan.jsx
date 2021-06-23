import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, Button, Container, Row, Col, NavDropdown, Navbar, Nav, Card } from 'react-bootstrap';
import SideBar from '../Pages/SideBar'
import Swal from 'sweetalert2'

export default class ViewPenjualan extends Component {

    constructor(props) {
        super(props);

        this.state = {

            id: this.props.match.params.id,
            data: {},

        }
    }

    getEmployee() {
        const kd_penjualan = this.state.id
        console.log(this.state.data)
        axios.get(`http://localhost:8000/penjualan/${kd_penjualan}`)
            .then(res => {
                console.log(kd_penjualan);
                console.log(res.data);
                this.setState({
                    data: res.data[0]
                });
            })
            .catch(err => {
                Swal.fire(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                );
                console.log(err)
            })
    }
    componentDidMount() {
        this.getEmployee();
    }

    render() {
        const data = this.state;

        return (
            <div>
                {/* NavBar */}
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Form inline>
                            <Nav>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={this.handleClick}>
                                        Log out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Form>
                    </Container>
                </Navbar>
                <SideBar />
                <Card
                    style={{ width: '62rem' }}
                    className="bagan"
                >
                    <Card.Body>

                        <Col md={-2}>
                            <Link to={"/penjualan/"}><Button className="mr-2" variant="primary" block=""><FontAwesomeIcon icon={faLongArrowAltLeft} /></Button></Link>
                        </Col><br />
                        <Form onSubmit={this.handleSubmit} noValidate>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Kode Penjualan
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control
                                        value={this.state.data.kd_penjualan}
                                        />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Tanggal Penjualan
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control
                                        value={this.state.data.tgl_penjualan}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Kode Admin
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control
                                        value={this.state.data.kd_admin}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                   Dibayar
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control
                                        value={this.state.data.dibayar}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Total Penjualan
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control
                                        value={this.state.data.total_penjualan}
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}