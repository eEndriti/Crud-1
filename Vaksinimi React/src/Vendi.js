import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddVenModal} from './AddVenModal';
import {EditVenModal} from './EditVenModal';


export class Vendi extends Component{
    constructor(props){
        super(props);
        this.state={ven:[],addModalShow:false,editModalShow:false}
    }
    
    refreshList(){
        fetch(process.env.REACT_APP_API+'Vendi')
        .then(response=>response.json())
        .then(data =>{
            this.setState({ven:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }
    deleteVen(VenId){
        if(window.confirm('A jeni i sigurte?')){
            fetch(process.env.REACT_APP_API+'Vendi/'+VenId,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {ven,VenId,VenEmri}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

                return(
            <div>
                <Table className="mt-4 bg-light text-dark" striped bordered hover size="sm" >
                        <thead>
                            <tr>
                            <th>ID e Vendit</th>
                            <th>Vendi</th>
                            <th>Opsionet</th>
                            </tr>
                        </thead>                       
                        <tbody>
                            {ven.map(ven=>
                                    <tr key={ven.VendiId}>
                                        <td>{ven.VendiId}</td>
                                        <td>{ven.Emri}</td>
                                        <td>
                                            <ButtonToolbar>
                                            <Button className="mr-2" variant="info"
                                                onClick={()=>this.setState({editModalShow:true,
                                                  VenId:ven.VendiId,VenEmri:ven.Emri})}>
                                                      Modifiko
                                            </Button>
                                            <Button className="mr-2" variant="danger"
                                                 onClick={()=>this.deleteVen(ven.VendiId)}>
                                                     Fshij
                                            </Button>
                                            <EditVenModal show={this.state.editModalShow}
                                                 onHide={editModalClose}
                                                 VenId={VenId}
                                                 VenEmri={VenEmri}/>
                                            </ButtonToolbar>
                                        </td>
                                    </tr>)}
                        </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>Shto Vendin</Button>

                    <AddVenModal show={this.state.addModalShow}
                    onHide={addModalClose}/>

                </ButtonToolbar>
            </div>
        )
    }
}