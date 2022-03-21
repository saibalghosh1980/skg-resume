import axios from "axios";
import * as React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { IProjectDetails, IProjects } from "../../../../model/Data";

export interface IProjectDetailsProps {
  project: IProjects;
}

export default function ProjectDetails(props: IProjectDetailsProps) {
  //=======================Fetch data=============================================================
  const { isLoading, error, isError, data, isSuccess } = useQuery<any, Error>(
    "SKG_PROJECT_DETAILS",
    () =>
      axios(
        "https://raw.githubusercontent.com/saibalghosh1980/saibalghosh1980.github.io/main/data/projects/" +
          props.project.id +
          ".json"
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
      style={{
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        fontFamily: "fantasy",
        fontSize: ".90rem"
      }}
    >
      <b>Summary:</b><br/>
      {data.data.summary}
      <br/>
      <b>Contributions:</b><br/>
      <ul>
      {data.data.contributions.map((item: any, index: number) => (
        <li>{item.description}</li>
      ))}
      </ul>
      <b>Awards &amp; Recognitions::</b><br/>
      <ul>
      {typeof data.data.recognition !== 'undefined'?data.data.recognition.map((item: any, index: number) => (
        <li>{item.description}</li>
      )):<></>}
      </ul>
      <b>Tenure:</b>&nbsp;&nbsp;{data.data.start} - {data.data.end}
    </div>
  );
}
