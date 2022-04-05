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
import { Dropdown, DropdownButton, Fade } from "react-bootstrap";
import {
  CaretRightFill,
  CaretDownFill,
  Facebook,
  Linkedin,
} from "react-bootstrap-icons";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import GeogRaphy from "../geography/Geography";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [showExpertise, setShowExpertise] = React.useState<string>("none");
  const handleShowHideClick = () => {
    showExpertise === "block"
      ? setShowExpertise("none")
      : setShowExpertise("block");
  };
  const [showQualification, setShowQualification] =
    React.useState<string>("none");
  const handleShowHideQualClick = () => {
    showQualification === "block"
      ? setShowQualification("none")
      : setShowQualification("block");
  };

  const [showGeo, setShowGeo] = React.useState<string>("none");
  const handleShowHideGeoClick = () => {
    showGeo === "block" ? setShowGeo("none") : setShowGeo("block");
  };

  const [region, setRegion] = React.useState<string>("asia");
  const handleRegionChange = (event: any) => {
    console.log(event);
  }
  
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
          <br />
          {data.data.socialMedia.map((item: any, index: number) => (
            <span className="text-center">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.id === "FB" ? (
                  <Facebook size={24} />
                ) : item.id === "LKD" ? (
                  <Linkedin size={24} />
                ) : (
                  <span></span>
                )}
              </a>
              &nbsp;&nbsp;
            </span>
          ))}
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
              {showExpertise === "none" ? (
                <CaretRightFill color="royalblue" />
              ) : (
                <CaretDownFill color="royalblue" />
              )}
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
            <br />
            <span
              onClick={() => handleShowHideQualClick()}
              style={{ cursor: "pointer" }}
            >
              {showQualification === "none" ? (
                <CaretRightFill color="royalblue" />
              ) : (
                <CaretDownFill color="royalblue" />
              )}
              <b>Education :</b>
            </span>

            <div
              style={{
                display: showQualification,
                fontSize: ".90rem",
              }}
            >
              <ul>
                {data.data.education.map((item: any, index: number) => (
                  <li>
                    <b>{item.qualification}</b> from <b>{item.institute}</b> on
                    the year {item.year}
                  </li>
                ))}
              </ul>
            </div>
            <br />

            <span
              onClick={() => handleShowHideGeoClick()}
              style={{ cursor: "pointer" }}
            >
              {showQualification === "none" ? (
                <CaretRightFill color="royalblue" />
              ) : (
                <CaretDownFill color="royalblue" />
              )}
              <b>Geographies worked in :</b>
            </span>
            <div
              style={{
                display: showGeo,
                fontSize: ".90rem",
              }}
            >
              <DropdownButton
                id="dropdown-basic-button"
                title="Region" size="sm"
              >
                <Dropdown.Item eventKey='asia' onSelect={() => setRegion('asia')}>Asia</Dropdown.Item>
                <Dropdown.Item eventKey='eu' onSelect={() => setRegion('eu')}>EU</Dropdown.Item>
                <Dropdown.Item eventKey='us' onSelect={() => setRegion('us')}>USA</Dropdown.Item>
                <Dropdown.Item eventKey='oc' onSelect={() => setRegion('oc')}>Oceania</Dropdown.Item>
              </DropdownButton>
              <GeogRaphy geo={region} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
