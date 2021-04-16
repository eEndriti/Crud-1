import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPerModal} from './AddPerModal';
import {EditPerModal} from './EditPerModal';

export class Personi extends Component{
    constructor(props){
        super(props);
        this.state={per:[],addModalShow:false,editModalShow:false}
    }
    
    refreshList(){
        fetch(process.env.REACT_APP_API+'Personi')
        .then(response=>response.json())
        .then(data =>{
            this.setState({per:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }
    deletePer(PerId){
        if(window.confirm('A jeni i sigurte?')){
            fetch(process.env.REACT_APP_API+'Personi/'+PerId,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {per,PerId,PerEmri,PerMbiemri,PerNrLeternjoftimit,PerVendbanimi,
        PerDataLindjes,PerDataVaksinimit,PerVendiVaksinimit}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

    return(      
            <div>    
             <Table className="mt-4 bg-light text-dark" striped bordered hover size="sm" >
                        <thead>
                            <tr>
                            <th>ID e Personit</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Nr_Leternjoftimit</th>
                            <th>Vendbanimi</th>
                            <th>Data e Lindjes</th>
                            <th>Data e Vaksinimit</th>
                            <th>Vendi i Vaksinimit</th>
                            <th>Opsionet</th>
                            </tr>
                        </thead>                       
                        <tbody>
                            {per.map(per=>
                                    <tr key={per.PersoniId}>
                                        <td>{per.PersoniId}</td>
                                        <td>{per.Emri}</td>
                                        <td>{per.Mbiemri}</td>
                                        <td>{per.Nr_Leternjoftimit}</td>
                                        <td>{per.Vendbanimi}</td>
                                        <td>{per.DataLindjes}</td>
                                        <td>{per.DataVaksinimit}</td>
                                        <td>{per.VendiVaksinimit}</td>
                                        <td>  <ButtonToolbar>
                                            <Button className="mr-2" variant="info"
                                                onClick={()=>this.setState({editModalShow:true,
                                                    PerId:per.PersoniId,
                                                    PerEmri:per.Emri,
                                                    PerMbiemri:per.Mbiemri,
                                                    PerNrLeternjoftimit:per.Nr_Leternjoftimit,
                                                    PerVendbanimi:per.Vendbanimi,
                                                    PerDataLindjes:per.DataLindjes,
                                                    PerDataVaksinimit:per.DataVaksinimit,
                                                    PerVendiVaksinimit:per.VendiVaksinimit
                                                    })}>
                                                      Modifiko
                                            </Button>
                                            <Button className="mr-2" variant="danger"
                                                 onClick={()=>this.deletePer(per.PersoniId)}>
                                                     Fshij
                                            </Button>
                                            <EditPerModal show={this.state.editModalShow}
                                                 onHide={editModalClose}
                                                 PerId={PerId}
                                                 PerEmri={PerEmri}
                                                 PerMbiemri={PerMbiemri}
                                                 PerNrLeternjoftimit={PerNrLeternjoftimit}
                                                 PerVendbanimi={PerVendbanimi}
                                                 PerDataLindjes={PerDataLindjes}
                                                 PerDataVaksinimit={PerDataVaksinimit}
                                                 PerVendiVaksinimit={PerVendiVaksinimit}
                                                 />
                                            </ButtonToolbar>
                                            </td>
                                    </tr>)}
                        </tbody>
                        </Table>

             <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Shto Personin</Button>

                    <AddPerModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}