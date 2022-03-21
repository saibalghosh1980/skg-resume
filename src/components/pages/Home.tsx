import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import skgprofilepic from "../../images/saibal_profile_pic.png";
import CSS from "csstype";
import { useQuery } from "react-query";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { Fade } from "react-bootstrap";
import{CaretRightFill,CaretDownFill} from "react-bootstrap-icons";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [showExpertise, setShowExpertise] = React.useState<string>("none");
  const handleShowHideClick = () => {
    showExpertise === "block"
      ? setShowExpertise("none")
      : setShowExpertise("block");
  };
  //=======================Fetch data=============================================================
  const { isLoading, error, isError, data, isSuccess } = useQuery<any, Error>(
    "SKG_EXEC_SUMMARY",
    () =>
      axios(`https://saibalghosh1980.github.io/data/data-exec-summary.json`),
    {}
  );
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (isError) {
    return <Alert variant="danger">{error?.message}</Alert>;
  }

  if (isSuccess) {
    console.log(data.data);
  }
  //==============================================================================================
  return (
    <Container fluid>
      <Row>
        <Col xs={3} className="text-left">
          <Image src={skgprofilepic} height="240" width="180" rounded />
        </Col>
        <Col className="text-left">
          <div
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              fontFamily: "fantasy",
            }}
          >
            {data.data.execsummary}
            <br />
            <span
              onClick={() => handleShowHideClick()}
              style={{ cursor: "pointer" }}
            >
              {showExpertise === "none" ? <CaretRightFill color="royalblue"/> : <CaretDownFill color="royalblue"/>}
              <b>Professional Expertise:</b>
            </span>

            <div
              style={{
                display: showExpertise,
                fontSize: ".90rem",
              }}
            >
              <ul>
                {data.data.profesionalExpertise.map(
                  (item: any, index: number) => (
                    <li>{item.description}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
