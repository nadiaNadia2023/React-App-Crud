import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from './action';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Contacts = () => {



    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts)

    const handleDelete = (contactId) => {
     
      dispatch(deleteContact(contactId));
    };

    useEffect(() => {
      dispatch(fetchContacts());
    
    }, [dispatch]);

    

  
  return (
    <Container >
      <Typography variant="h4" style={{ marginTop: 20,marginBottom : 30 }}>
        List Contacts
      </Typography>
     

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >ID </TableCell>
            <TableCell >Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>

        
          {contacts.map((row) => (
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
              {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>  
                <Button variant="contained" color="success" size="small"  ><EditIcon />Edit</Button> 
                <Button onClick={() => handleDelete(row.id)} variant="contained" color="error" size="small" sx={{ margin  : '10px' }}><DeleteIcon /> Delete</Button>
              </TableCell>
             
            </TableRow> ))}
          
        </TableBody>
      </Table>
    </TableContainer>


    
    </Container>
  )
};

export default Contacts;
