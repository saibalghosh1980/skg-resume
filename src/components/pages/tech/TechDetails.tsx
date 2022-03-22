import * as React from "react";
import { Table } from "react-bootstrap";
import { ITech } from "../../../model/Data";
import Image from "react-bootstrap/Image";
import BEG from "../../../images/BEG.png";
import INT from "../../../images/INT.png";
import PRO from "../../../images/PRO.png";

export interface ITechDetailsProps {
  technology: ITech[];
}

const determineImage = (proficiency: string) => {
    switch (proficiency) {
        case "BEG":
        return BEG;
        case "INT":
        return INT;
        case "PRO":
        return PRO;
        default:
        return PRO;
    }
}

export default function TechDetails(props: ITechDetailsProps) {
 if(props.technology.length == 0){
     return <div style={{
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        fontFamily: "fantasy",
      }}>Select category</div>
 }
  return (
    <div
      id="id_tech_details"
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
            <th>Name</th>
            <th>Zen Level</th>
            {/* <th>Years of exp</th> */}
          </tr>
        </thead>
        <tbody>
          {props.technology.map((item: ITech, index: number) => (
            <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td><Image src={determineImage(item.proficiency)}/></td>
              {/* <td>{item.yoe}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        fontFamily: "fantasy",
        fontSize: ".75rem"
      }}>
          <Image src={BEG}/> - Beginner &nbsp;&nbsp;
          <Image src={INT}/> - Intermediate &nbsp;&nbsp;
          <Image src={PRO}/> - Professional &nbsp;&nbsp;
      </div>
    </div>
  );
}
