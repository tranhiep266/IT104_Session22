import { Spinner } from "react-bootstrap";

export default function Ex6() {
    return (
        <div
            style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
            }}
        >
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
        </div>
    );
}