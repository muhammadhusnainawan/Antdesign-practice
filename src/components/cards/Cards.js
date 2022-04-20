import "./Cards.css";
import Card from "../card/Card";
import { Row, Col } from "antd";
import { useCards } from "./useCards";
import Loader from "../../commonComponents/Loader";
function Cards() {
  const [data, isLoading] = useCards();
  console.log("data fro api", data);
  console.log("loading is", isLoading);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="cards">
      <Row justify="flex-start">
        {data.map((item, index) => {
          return (
            <Col xs={24} sm={24} md={8} lg={8} xl={6} key={index}>
              <Card item={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  ); 
  
}

export default Cards;
