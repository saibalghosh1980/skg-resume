import axios from "axios";
import * as React from "react";
import { Accordion, Alert, Card, OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useQuery } from "react-query";
import { isTemplateExpression } from "typescript";
import { ICert } from "../../../model/Data";

export interface ICertProps {}

export default function Cert(props: ICertProps) {
  //=======================Fetch data=============================================================
  const { isLoading, error, isError, data, isSuccess } = useQuery<any, Error>(
    "SKG_CERT_SUMMARY",
    () =>
      axios(
        `https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/data-cert-summary.json`
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
    <div
      className="text-left"
      style={{
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        fontFamily: "fantasy",
      }}
    >
      <Accordion defaultActiveKey="0">
        {data.data.certSummary.map(
          (
            item: {
              provider: string;
              provideName: string;
              certifications: ICert[];
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
                    [{item.provideName}]&nbsp;
                  </Tooltip>
                }
              >
                <img
                height="30px"
                src={
                  "https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/cert/" +
                  item.provider +
                  ".png"
                }
              />  
              </OverlayTrigger>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
              {item.certifications.map((item: ICert, index: number) => (
                <img
                  height="100px"
                  src={
                    "https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/cert/" +
                    item.id +
                    ".png"
                  }
                />
              ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          )
        )}
            
      </Accordion>
    </div>
  );
}
