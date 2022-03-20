import axios from "axios";
import * as React from "react";
import { Alert, Spinner } from "react-bootstrap";
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
      {data.data.certSummary.map(
        (
          item: {
            provider: string;
            certifications: ICert[];
          },
          index: number
        ) => (
          <div>
            <img
              height="30px"
              src={
                "https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/cert/" +
                item.provider +
                ".png"
              }
            />
           <br/>
           <br/>
            
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
            
          </div>
        )
      )}
    </div>
  );
}
