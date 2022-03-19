import axios from "axios";
import * as React from "react";
import {
  Accordion,
  Alert,
  Card,
  OverlayTrigger,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import { useQuery } from "react-query";
import { ICountry } from "../../../model/Data";
import CompanyDetails from "./component/CompanyDetails";

export interface IWorkExpProps {}

export default function WorkExp(props: IWorkExpProps) {
  //=======================Fetch data=============================================================
  const { isLoading, error, isError, data, isSuccess } = useQuery<any, Error>(
    "SKG_WORKEX_SUMMARY",
    () =>
      axios(
        `https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/data-work-summary.json`
      ),
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
    <Accordion defaultActiveKey="0">
      {data.data.workSummary.map(
        (
          item: {
            id: string,
            name: string;
            startDate: string;
            endDate: string;
            imageURL: string;
            designation: string;
            countries : ICountry[];
          },
          index: number
        ) => (
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={index.toString()}
              className="text-left"
            >
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2">
                    [{item.startDate}&nbsp;-&nbsp;{item.endDate}]&nbsp;
                  </Tooltip>
                }
              >
                <img src={item.imageURL} height="25" />
              </OverlayTrigger>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                <CompanyDetails companyName={item.name} compnanyId={item.id} 
                startDate={item.startDate} endDate={item.endDate}
                designation={item.designation}
                countries={item.countries}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )
      )}
    </Accordion>
    //<h1>{data.data.workSummary[0].name}</h1>
  );
}
