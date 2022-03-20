import * as React from "react";
import axios from "axios";
import {
  Accordion,
  Alert,
  Button,
  Card,
  OverlayTrigger,
  Spinner,
  Table,
  Tooltip,
} from "react-bootstrap";
import { useQuery } from "react-query";
import { ITech } from "../../../model/Data";
import TechDetails from "./TechDetails";
import { useState } from "react";

export interface ITechProps {}

export default function Tech(props: ITechProps) {
  const [tech, setTech] = useState<ITech[]>([]);
  const [activeRow, setActiveRow] = useState<number>(-1);

  //=======================Fetch data=============================================================
  const { isLoading, error, isError, data, isSuccess } = useQuery<any, Error>(
    "SKG_TECH_SUMMARY",
    () =>
      axios(
        `https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/data-tech-summary.json`
      ),
    {}
  );
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (isError) {
    return <Alert variant="danger">{error?.message}</Alert>;
  }

  //==============================================================================================
  const handleClick = (event: ITech[],row:number) => {
    setTech(event);
    setActiveRow(row);
    console.log(tech)
  };
  if (isSuccess) {
    console.log(data.data);
    //console.log(data.data.techSummary);

    return (
      <div
        className="text-left"
        style={{
          whiteSpace: "pre-wrap",
          overflowWrap: "break-word",
          fontFamily: "fantasy",
        }}
      >
        <Table responsive="xl">
          <thead>
            <tr>
              <th>#</th>
              <th>Technology Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.data.techSummary.map(
              (
                item: {
                  catagory: string;
                  technologies: ITech[];
                },
                index: number
              ) => (
                <tr>
                  <td>{activeRow==index?<i> {index+1}</i>:index+1}</td>
                  <td>{activeRow==index?<i> <b>{item.catagory}</b></i>:item.catagory}</td>
                  <td>
                    <Button size="sm" variant="primary" onClick={()=>handleClick(item.technologies,index)}>
                      Details..
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <TechDetails technology={tech} />
      </div>
    );
  }

  return <div></div>;
}
