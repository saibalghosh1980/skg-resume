import * as React from "react";
import { HiMail } from "@react-icons/all-files/hi/HiMail";
import { FcCellPhone } from "@react-icons/all-files/fc/FcCellPhone";
import { useQuery } from "react-query";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  //=======================Fetch data=============================================================
  const { isLoading, error, isError, data, isSuccess } = useQuery<any, Error>(
    "SKG_PERSONAL_INFO",
    () =>
      axios(`https://saibalghosh1980.github.io/data/personalinfo.json`),
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
    <blockquote className="blockquote text-center text-white">
      <footer className="blockquote-footer text-white">
        <a href="mailto: saibal.ghosh.1980@gmail.com">
          <HiMail />
        </a>
        &nbsp;{data.data.email} &nbsp;&nbsp;
        <FcCellPhone />
        &nbsp;&nbsp;{data.data.mobile}
      </footer>
    </blockquote>
  );
}
