import React, { Component } from 'react';


require('../css/dashboard.css');

  
class Dashboard extends Component{
    redirection(){
        window.location="http://localhost:3000/Table"
    }

    
    render(){
        
        return(
            <div className="dashboardColor">
                <div className="header">
                    <label className="protfolio">Protfolio</label>
                    <label className="about" onClick={this.redirection}>About</label>
                    
                </div>
               <div className="labelDiv">
                   <div>
                        <label className="nameTitle">Hello, I'm Jojo!</label>
                    </div>
                    <div className="nameTitleDiv">
                        <label className="nameTitieDescription">Front End Developer | Open Source Enthusiast </label>
                    </div>  
               </div> 
            </div>
        )
    }
}export default Dashboard;