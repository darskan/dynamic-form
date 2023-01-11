import { Button, Col, Container, Row } from 'react-bootstrap'
import './Introduction.css'

export default function Introduction() {
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs="12" md={8}>
                    <h1 className="pl-2 text-center">
                        Welcome to dy dymanic form {"  "} 
                        <span className="pt-2 pb-4">
                            that you will do everything that you want
                        </span>
                    </h1>
                    <h4 className="text-center pt-3">
                        Hola soy Angel David Albarracin Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </h4>
                    <div className="d-flex container-actions mt-5">
                        <div className="continer-buttons">
                            <Button className="p-3" onClick={() => console.log("haciendo Click")}>
                            Get in Touch
                            </Button>
                            <Button className="p-3">
                            Get in Touch
                            </Button>
                        </div>
                        <div className="btn-start-create">
                            <a href='#dynamic-form'>start to create ➡️</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
