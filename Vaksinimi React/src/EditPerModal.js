import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

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
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                personiId:event.target.personiId.value,
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Nr_Leternjoftimit:event.target.Nr_Leternjoftimit.value,
                Vendbanimi:event.target.Vendbanimi.value,
                DataLindjes:event.target.DataLindjes.value,
                VendiVaksinimit:event.target.VendiVaksinimit.value
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
            Modifiko Personin
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>

                <Form.Group controlId="personiId">
                        <Form.Label>personiId</Form.Label>
                        <Form.Control type="text" name="personiId" required disabled 
                        defaultValue={this.props.PerId}/>
                    </Form.Group>

                    <Form.Group controlId="Emri">
                        <Form.Label>Emri</Form.Label>
                        <Form.Control type="text" name="Emri" required 
                        defaultValue={this.props.PerEmri}
                        />
                    </Form.Group>

                    <Form.Group controlId="Mbiemri">
                        <Form.Label>Mbiemri</Form.Label>
                        <Form.Control type="text" name="Mbiemri" required 
                        defaultValue={this.props.PerMbiemri}
                        />
                    </Form.Group>

                    <Form.Group controlId="Nr_Leternjoftimit">
                        <Form.Label>Nr_Leternjoftimit</Form.Label>
                        <Form.Control type="text" name="Nr_Leternjoftimit" required
                        defaultValue={this.props.PerNrLeternjoftimit}
                        />
                    </Form.Group>

                    <Form.Group controlId="Vendbanimi">
                        <Form.Label>Vendbanimi</Form.Label>
                        <Form.Control type="text" name="Vendbanimi" required 
                        defaultValue={this.props.PerVendbanimi}
                        />
                    </Form.Group>

                    <Form.Group controlId="DataLindjes">
                        <Form.Label>DataLindjes</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataLindjes"
                        required
                        
                        defaultValue={this.props.PerDataLindjes}
                        />
                    </Form.Group>

                    <Form.Group controlId="DataVaksinimit">
                        <Form.Label>DataVaksinimit</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DataVaksinimit"
                        required
                        defaultValue={this.props.PerDataVaksinimit}
                        />
                    </Form.Group>

                    <Form.Group controlId="VendiVaksinimit">
                        <Form.Label>Vendi</Form.Label>
                        <Form.Control type="text" name="Vendi" required 
                        defaultValue={this.props.PerVendiVaksinimit}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                        Modifiko Personin
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