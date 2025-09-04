import { Toast, ToastContainer } from "react-bootstrap";

export default function Ex7() {

    return (
        <ToastContainer className="p-3" position="middle-center">
            <Toast>
                <Toast.Header>
                    <strong className="me-auto">Cảnh báo</strong>
                </Toast.Header>
                <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}