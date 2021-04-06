import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditPerModal extends Component{
    constructor(props){
        super(props);
        this.state={ven:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch(process.env.REACT_APP_API+'Vendi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({ven:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Personi',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PersoniId:null,
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Nr_Leternjoftimit:event.target.Nr_Leternjoftimit.value,
                Vendbanimi:event.target.Vendbanimi.value,
                DataLindjes:event.target.DataLindjes.value,
                DataVaksinimit:event.target.DataVaksinimit.value,
                VendiVaksinimit:event.target.VendiVaksinimit.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Shto Personin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Emri">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="Emri" required 
                        placeholder="Emri i Personit"/>
                    </Form.Group>

                    <Form.Group controlId="Vendi">
                        <Form.Label>Vendi</Form.Label>
                        <Form.Control as="select">
                        {this.state.ven.map(ven=>
                            <option key={ven.VendiId}>{ven.Emri}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="DataLindjes">
                        <Form.Label>DataLindjes</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataLindjes"
                        required
                        placeholder="DataLindjes"
                        />
                       
                        
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shto Personin
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}