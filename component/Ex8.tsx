import { Form, Row, Col, Button } from "react-bootstrap";

export default function Ex8() {
    return (
        <Form
            style={{ padding: 24 }}
            className="text-body"
        >
            <h2 className="text-center mb-4">Đăng ký tài khoản</h2>

            <div className="mx-auto" style={{ maxWidth: 760 }}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="password">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" >
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control/>
                </Form.Group>

                <Row className="mb-4">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Thành phố</Form.Label>
                            <Form.Select>
                                <option>Hà Nội</option>
                                <option>TP. Hồ Chí Minh</option>
                                <option>Đà Nẵng</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Quận</Form.Label>
                            <Form.Select defaultValue="Thanh Xuân">
                                <option>Thanh Xuân</option>
                                <option>Cầu Giấy</option>
                                <option>Ba Đình</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Mã bưu điện</Form.Label>
                            <Form.Control placeholder="100000" />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="text-center">
                    <Button type="submit" size="lg">
                        Submit
                    </Button>
                </div>
            </div>
        </Form>
    );
}