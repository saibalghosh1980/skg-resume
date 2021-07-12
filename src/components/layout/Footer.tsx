import * as React from "react";
import { HiMail } from "@react-icons/all-files/hi/HiMail";
import { FcCellPhone } from "@react-icons/all-files/fc/FcCellPhone";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <blockquote className="blockquote text-center text-white">
      <footer className="blockquote-footer text-white">
        <a href="#">
          <HiMail />
        </a>
        &nbsp;saibal.ghosh.1980@gmail.com
        &nbsp;&nbsp;<FcCellPhone/>&nbsp;&nbsp;(+44)7469710917
      </footer>
    </blockquote>
  );
}
