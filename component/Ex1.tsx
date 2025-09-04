import { Button } from "react-bootstrap";

export default function Ex1() {
    return (
        <div
            style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
                padding: 24,
            }}
        >
            <Button variant="primary">Lưu</Button>
            <Button variant="secondary">Hủy</Button>
            <Button variant="success">Thành công</Button>
            <Button variant="warning">Cảnh báo</Button>
            <Button variant="danger">Báo lỗi</Button>
            <Button variant="info">Thông tin</Button>
            <Button variant="link">Đường dẫn</Button>
        </div>
    );
}