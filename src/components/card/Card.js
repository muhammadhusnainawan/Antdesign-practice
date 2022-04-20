import { Card } from "antd";
import {
  EditOutlined,
  DeleteFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import "./Card.css";

const { Meta } = Card;

export default ({ item }) => (
  <div className="card">
    <Card
      className="card__header"
      style={{ minWidth: 300, margin: "15px" }}
      cover = {
        <img className="card__headerImg"
          alt="example"
          src={`https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=happy`}
        />
      }
      actions={[
        <HeartOutlined
          key="favourites"
          style={{ fontSize: "20px", color: "red" }}
        />,
        <EditOutlined key="edit" style={{ fontSize: "20px" }} />,
        <DeleteFilled key="delete" style={{ fontSize: "20px" }} />,
      ]}
    >
      <Meta style={{ marginBottom: "0.5em" }} title={item.name} />
      <span className="card__icon">
        <MailOutlined style={{ fontSize: "18px", paddingRight: "10px" }} />
        <p>{item.email}</p>
      </span>
      <span className="card__icon">
        <PhoneOutlined style={{ fontSize: "18px", paddingRight: "10px" }} />
        <p>{item.phone}</p>
      </span>
      <span className="card__icon">
        <GlobalOutlined style={{ fontSize: "18px", paddingRight: "10px" }} />
        <p>{item.website}</p>
      </span>
    </Card>
  </div>
);
