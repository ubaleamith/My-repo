import React,{Component} from 'react';
import data from '../JsonData/Activity.json';
import {connect} from 'react-redux';
import { storeActivityValue } from '../action/DataActions';
import ReactTable from 'react-table';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

class SearchRecord extends Component
{

constructor(props)
{
super(props);
this.state=({
term:"",
isData:false
})
this.searchHandler=this.searchHandler.bind(this);
}
componentDidMount()
{
  this.props.storeActivityValue(data);
}



searchHandler=(event)=>
{
this.setState({
  term:event.target.value
})
}
  render()
  {

    const columns = [{
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'NAME',
    accessor: 'name',
  },
  {
    Header: 'ACTIVITY',
    accessor: 'actInfo',
  }]



      console.log(`term---,${this.state.term}`);
// if(${this.state.term} === "")
// {
//   setState({
//     output :""
//   })
// }

let termDisplay = null;
if(this.state.term.length>0)
{
  termDisplay= this.props.activitysData.filter(serching(this.state.term)).map((activitysData) =>
    <Col   key ={activitysData.id} style={{padding:'10px'}}>

        {activitysData.actInfo}
    </Col>
  );
}else{
}
    return (
<div>
<form >
<input type="text" placeholder="Enter search text here...." style={{border:'5px solid',}} onChange={this.searchHandler}/>
</form>
<div>

    {termDisplay}
  </div>
 </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    storeActivityValue: data => dispatch(storeActivityValue(data))
  }
}

const mapStateToProps = (data) => {
  console.log('activity--2222-',data.activitys);
  const activitysData=data.activitys;
  return {activitysData};
}

function serching(term)
{
  return function(x)
  {
    return x.actInfo.toString().toLowerCase().includes(term.toString().toLowerCase()) || !term;
  }
}

 export default connect(mapStateToProps,mapDispatchToProps)(SearchRecord);
