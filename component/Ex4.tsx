import { Dropdown} from "react-bootstrap";

export default function Ex4() {
    return (
        <div style={{ padding: 24, display: "flex", justifyContent: "center" }}>
            <Dropdown>
                <Dropdown.Toggle variant="secondary">
                    Nguyễn Văn Nam
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 280, fontSize: 20 }}>
                    <Dropdown.Item>Cài đặt</Dropdown.Item>
                    <Dropdown.Item>Đổi mật khẩu</Dropdown.Item>
                    <Dropdown.Item>Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}