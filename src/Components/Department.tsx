import { Container, Typography } from "@mui/material";
import DepartmentList from "./DepartmentList"; 

const departmentsData = [
  {
    id: 1,
    name: "Department 1",
    subDepartments: [
      { id: 11, name: "Sub Department 1.1" },
      { id: 12, name: "Sub Department 1.2" },
    ],
  },
  {
    id: 2,
    name: "Department 2",
    subDepartments: [
      { id: 21, name: "Sub Department 2.1" },
      { id: 22, name: "Sub Department 2.2" },
    ],
  },
];

export default function Department() {
  return (
    <Container sx={{mt:"100px",mb:"120px"}}>
      <Typography sx={{color:"#000",fontSize:"2.2rem"}} variant="h5" gutterBottom>
        Department List
      </Typography>
      <DepartmentList departments={departmentsData} />
    </Container>
  );
}