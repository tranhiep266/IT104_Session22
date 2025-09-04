import { Row, Col, Card, Button } from "react-bootstrap";

export default function Ex3() {
    return (
        <div style={{ padding: 24 }}>
            <Row>
                <Col>
                    <Card className="h-100">
                        <Card.Img
                            variant="top"
                            src="../src/assets/Ex3.png"
                            style={{ height: 240 }}
                            alt="MacBook Air 2018"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">MacBook Air 2018</Card.Title>
                            <Card.Text style={{ minHeight: 72 }}>
                                The reason I am selling the machine is because it is too much power for what I need
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button variant="primary">Xem chi tiết</Button>
                                <div>
                                    30.000.000 đ
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Img
                            variant="top"
                            src="../src/assets/Ex3.png"
                            style={{ height: 240 }}
                            alt="MacBook Pro 2019"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">MacBook Pro 2019</Card.Title>
                            <Card.Text style={{ minHeight: 72 }}>
                                The reason I am selling the machine is because it is too much power for what I need.
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button variant="primary">Xem chi tiết</Button>
                                <div>
                                    30.000.000 đ
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}