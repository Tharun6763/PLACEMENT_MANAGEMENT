import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CompCustomizedTable({ data, userCGPA }) {
  if (!data || data.length === 0) {
    return null;
  }

  // Extract the keys from the first object to use as headers
  const tableHeaders = Object.keys(data[0]);

  return (
    <div>
      <p>User CGPA: {userCGPA}</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <StyledTableCell key={header}>{header}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <StyledTableRow key={index}>
                {tableHeaders.map((header) => (
                  <StyledTableCell key={header}>
                    {header === "link" ? (
                      <a
                        href={item[header]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={userCGPA <= item.required_cgpa}
                        >
                          APPLY HERE
                        </Button>
                      </a>
                    ) : (
                      item[header]
                    )}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
