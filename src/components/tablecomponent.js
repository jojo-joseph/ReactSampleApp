import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

require('../css/table.css');

class Tableexample extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            datamodel: []
        };
        this.tabledata = this.tabledata.bind(this);
    } 
    tabledata() {

            fetch('http://jsonplaceholder.typicode.com/todos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => response.json())
             // console.log(response)
              .then((responseJson) => {
				console.log(responseJson);
				this.setState({
					data: responseJson
				});
			})
             
            .catch((error) => {
				console.error(error);
			});
            }

        componentDidMount() {
                this.tabledata();
        }

        tableBoxData=(data)=>{
            return(
                
                    <TableBody>
                    <TableRow>
                        <TableCell align="right">{data.userId}</TableCell>
                        <TableCell align="right">{data.id}</TableCell>
                        <TableCell align="right">{data.title}</TableCell>
                        <TableCell align="right">{data.completed}</TableCell>
                        
                    </TableRow>
                  
                    </TableBody>
                
            
                  
            
            )
        }


render() {
        return(
            <div>
                <div className="mainClassLogintable">
                <label className="labelClassName"> Meterial UI Table Example</label>
                        <div className="dashboardTable">
                        <Paper className="f">
                        <Table className="" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                              
                                <TableCell align="right">userId</TableCell>
                                <TableCell align="right">id</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">completed</TableCell>
                            </TableRow>
                            </TableHead>
                            {this.state.data.map((data) => {
                                return this.tableBoxData(data);
                            })}
                            </Table>
                </Paper>
                            
                        </div>
                </div>
            </div>
        )
      }
    }

export default Tableexample;
  