"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading } from "@carbon/react";

function AttributeTable({ label, headers, rows }) {
  return (
    <div className="bg-[#E0E0E0] rounded-[3px] pb-2 pt-3 mb-3">
      <Heading className="ml-3 mb-2 text-[#595959] text-[14px] font-normal leading-[18px] tracking-[0.16px] text-left">
        {label}
      </Heading>
      <Table className="rounded-[3px]">
        <TableHeader className="bg-[#B5B5B5] rounded-[3px]">
          <TableRow>
            {headers.map((header, index) => {
              return (
                <TableHead key={index} className="text-white">
                  {header}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {rows.map((cells, index) => {
            return (
              <TableRow key={index}>
                {cells.map((cell, j) => {
                  return (
                    <TableCell key={j} className="font-medium">
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AttributeTable;
