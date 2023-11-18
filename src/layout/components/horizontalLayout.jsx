import { Row, Col } from "antd";

function HorizontalLayout({ sidebarComponent, contentComponent }) {
    return (
        <Row>
            <Col span={8}>{sidebarComponent}</Col>
            <Col span={16}>{contentComponent}</Col>
        </Row>
    );
}

export default HorizontalLayout;
