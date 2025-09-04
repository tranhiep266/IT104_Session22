import Form from "react-bootstrap/Form";

export default function Ex2() {
    return (
        <div style={{ padding: 24, maxWidth: 400 }}>
            <Form.Control size="lg" type="text" placeholder="Input cỡ lớn" style={{ marginBottom: 16 }} />
            <Form.Control type="text" placeholder="Input cỡ trung bình" style={{ marginBottom: 16 }} />
            <Form.Control size="sm" type="text" placeholder="Input cỡ bé" />
        </div>
    );
}