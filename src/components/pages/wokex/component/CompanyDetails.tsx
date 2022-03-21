import * as React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import { IClienCompany, ICountry, IProjects } from "../../../../model/Data";

import { BinocularsFill } from "react-bootstrap-icons";
import ProjectDetails from "./ProjectDetails";

export interface ICompanyDetailsProps {
  companyName: string;
  compnanyId: string;
  startDate?: string;
  endDate?: string;
  designation?: string;
  countries: ICountry[];
  clients: IClienCompany[];
  projects: IProjects[];
}

export default function CompanyDetails(props: ICompanyDetailsProps) {
  const [show, setShow] = React.useState(false);
  const[selectedProject,setSelectedProject]=React.useState<IProjects>({
    "id": "","name": "" });

  const handleClose = () => setShow(false);
  const handleShow = (project:IProjects) => {
    setSelectedProject(project);
    setShow(true);
    
  }
  //=======================Fetch data=============================================================

  //==============================================================================================

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} className="text-left">
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              Tenure:
            </div>
          </Col>
          <Col className="text-left">
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              From {props.startDate} to {props.endDate}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="text-left">
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              Designation :
            </div>
          </Col>
          <Col className="text-left">
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              {props.designation}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="text-left">
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              Countries :
            </div>
          </Col>
          <Col className="text-left">
            {props.countries.map((country: ICountry) => (
              <img
                src={
                  "https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/country/" +
                  country.countryCode +
                  ".png"
                }
              />
            ))}
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="text-left">
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              Clients (Selected) :
            </div>
          </Col>
          <Col className="text-left">
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              {props.clients.map((clients: IClienCompany) => (
                <div>{clients.name}</div>
              ))}
            </div>
          </Col>
        </Row>
        {typeof props.projects != "undefined" ? (
          <Row>
            <Col xs={2} className="text-left">
              <div
                style={{
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  fontFamily: "fantasy",
                }}
              >
                Projects (Selected) :
              </div>
            </Col>
            <Col className="text-left">
              <div
                style={{
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  fontFamily: "fantasy",
                }}
                
              >
                {props.projects.map((project: IProjects) => (
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={()=>handleShow(project)}
                  >
                    {project.name}&nbsp;
                    <BinocularsFill color="royalblue" />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        ) : (
          <div></div>
        )}
      </Container>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                fontFamily: "fantasy",
              }}
            >
              {selectedProject.name}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectDetails project={selectedProject}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
