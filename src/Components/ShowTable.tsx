import {Container,Typography} from "@mui/material";
import DataTable from './DataTable';
import Department from './Department';

export default function ShowTable() {
  return (
    <Container maxWidth="lg" sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Typography variant='h4' sx={{color:"#000",textDecoration:"underline",mb:"30px",fontWeight:"bold",fontSize:"2.8rem"}}>Posts Table</Typography>
        <DataTable/>
        <Department/>
    </Container>
  )
}
