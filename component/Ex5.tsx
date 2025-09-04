import { Alert } from "react-bootstrap";

export default function Ex5() {
    return (
        <div style={{ padding: 24, maxWidth: 600, margin: "0 auto" }}>
            <Alert variant="success" dismissible>
                Thêm tài khoản thành công.
            </Alert>

            <Alert variant="danger" dismissible>
                Thêm mới tài khoản thất bại.
            </Alert>

            <Alert variant="warning" dismissible>
                Tên không được để trống.
            </Alert>
        </div>
    );
}