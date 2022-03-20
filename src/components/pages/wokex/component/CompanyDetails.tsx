import * as React from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import { IClienCompany, ICountry } from "../../../../model/Data";

export interface ICompanyDetailsProps {
  companyName: string;
  compnanyId: string;
  startDate?: string;
  endDate?: string;
  designation?: string;
  countries: ICountry[];
  clients: IClienCompany[];
}

export default function CompanyDetails(props: ICompanyDetailsProps) {
  //=======================Fetch data=============================================================

  //==============================================================================================

  return (
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
          {
            props.countries.map((country: ICountry) => (
              <img  src={'https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/country/'+country.countryCode+'.png'}/>
            ))
          }
          
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
            {
            props.clients.map((clients: IClienCompany) => (
              <div>
                {clients.name}
              </div>
            ))
          }
          </div>
        </Col>
      </Row>
    </Container>
  );
}
