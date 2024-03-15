import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import React,{useState,useEffect, Fragment} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const CRUD=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[name,setName]=useState('')
    const[phoneno,setPhoneno]=useState('')
    const[emailid,setEmailid]=useState('')
    const[IsActive,setIsactive]=useState(0)

    const[editId,seteditId]=useState('')
    const[editname,seteditname]=useState('')
    const[editphoneno,seteditphoneno]=useState('')
    const[editemailid,seteditemailid]=useState('')
    const[editIsActive,seteditIsActive]=useState(0)

const handleEdit=(id)=>
{
   // alert(id);
   handleShow();
}
const handleUpdate=()=>
{

}

const handleDelete=(id)=>
{
    if(window.confirm("are you sure want to delete")==true)
    {
        alert(id);
    }
   
}
const empdata=[
    {
        id:1,
        name:'vasuki',
        phoneno:9788905034,
        emailid:'vasuki@ksrce.ac.in',
        IsActive:1
    },
    {
        id:2,
        name:'devi',
        phoneno:9788905078,
        emailid:'devi@ksrce.ac.in',
        IsActive:1
    },
    {
        id:3,
        name:'abi',
        phoneno:9788905045,
        emailid:'abi@ksrce.ac.in',
        IsActive:0
    }


]
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(empdata);
    },[])
    return(

        <Fragment>

<Container>
      <Row>
        
        
        <Col><input type="text" className="form-control"   placeholder="enter your name" value={name} onChange={(e)=> setName(e.target.value)} /></Col>
      
        <Col><input type="text" className="form-control"   placeholder="enter phoneNo" value={phoneno} onChange={(e)=> setPhoneno(e.target.value)} /></Col>
        <Col><input type="text" className="form-control"   placeholder="enter emailid" value={emailid} onChange={(e)=> setEmailid(e.target.value)} /></Col>
        <Col><input type="checkbox" checked={IsActive === 1?true:false} onChange={(e)=>setIsactive(e)} value={editIsActive}/></Col>
        <label>IsActive</label>
        <Col><button className="btn btn-primary">Submit</button></Col>
      </Row>
    </Container>
    <br>
    </br>
 <Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
        <th>name</th>
          <th>phoneno</th>
          <th>emailid</th>
          <th>IsActive</th>
          <th> Action </th>

        </tr>
      </thead>
      <tbody>

        {
            data && data.length >0  ?
            data.map((item,index) => {
                return (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phoneno}</td>
                    <td>{item.emailid}</td>
                    <td>{item.IsActive}</td>
                    <td colSpan={2}>  
                    <button class="btn-btn-primary" onClick={()=>handleEdit(item.id)}>Edit</button> &nbsp;
                    <button class="btn-btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
                    </td>
        </tr>
                )
            })
            :
            'Loading..'
        }
       
        
      </tbody>
    </Table>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Col><input type="text" className="form-control"   placeholder="enter your name" value={editname} onChange={(e)=> seteditname(e.target.value)} /></Col>
      
      <Col><input type="text" className="form-control"   placeholder="enter phoneNo" value={editphoneno} onChange={(e)=> seteditphoneno(e.target.value)} /></Col>
      <Col><input type="text" className="form-control"   placeholder="enter emailid" value={editemailid} onChange={(e)=> seteditemailid(e.target.value)} /></Col>
      <Col><input type="checkbox" checked={IsActive === 1?true:false} onChange={(e)=>seteditIsActive(e)} value={editIsActive}/></Col>
      <label>editIsActive</label>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Fragment>
    )
}


export default CRUD;