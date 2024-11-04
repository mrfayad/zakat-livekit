import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@mui/material";

function CallerInfoTable({ callerData }) {
  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Typography variant="h6" align="center" style={{ padding: "10px" }}>
        Maklumat Pemanggil
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nama</TableCell>
            <TableCell>MyKad No</TableCell>
            <TableCell>Lokasi</TableCell>
            <TableCell>Skor Sentimen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {callerData.length > 0 ? (
            callerData.map((caller, index) => (
              <TableRow key={index}>
                <TableCell>{caller.name}</TableCell>
                <TableCell>{caller.mykadNo}</TableCell>
                <TableCell>{caller.location}</TableCell>
                <TableCell>{caller.sentimentScore}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Tiada maklumat pemanggil tersedia.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CallerInfoTable;