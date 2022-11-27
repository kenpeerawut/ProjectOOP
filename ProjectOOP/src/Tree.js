import TreeMenu from "react-simple-tree-menu";
import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import './tree.css';
import '../node_modules/react-simple-tree-menu/dist/main.css';
import $ from "jquery";
import {Tab1,Tab2,Tab3 }from './Tab'


class Treel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image:"",data:"",t1:false,t2:false,t3:false};
  }

  componentWillMount(){//pp
    axios.post('http://localhost:9999/list').then(respons=>this.setState({
      data : respons.data
    }));
  }

  render=()=>{
    return (
      <div class="box"> 
          <div class="tree">
            <TreeMenu
              data={this.state.data}
              onClickItem={({label,value}) => {
                {   
                      $("#t1").hide();
                      $("#t2").show();
                      $("#t3").hide();
                      this.setState({
                        t2 : true
                      })
                    }
                  }
                }
              initialOpenNodes={this.state.data}
              hasSearch={false}
            />
          </div>  
        <div id="box2">
          <img id="photo" alt='' src={`data:image/jpeg;base64,${this.state.image}`} />
            {/* <div id='t1'>{this.state.t1&&<Tab1/>}</div> */}
            <div id='t2'>{this.state.t2&&<Tab2/>}</div>
            {/* <div id='t3'>{this.state.t3&&<Tab3/>}</div> */}
        </div>
      </div>
    );
  }
};
export default Treel;



