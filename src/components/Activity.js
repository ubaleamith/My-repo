import React,{Component} from 'react';
import data from '../JsonData/Activity.json';
import {connect} from 'react-redux';
import { storeActivityValue } from '../action/DataActions';
import ReactTable from 'react-table';
class Activity extends Component
{

componentDidMount()
{
  this.props.storeActivityValue(data);
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

    return (
<div>
    <ReactTable
      data={this.props.activitysData}
    columns={columns}
    defaultPageSize={10}
    minRows={10}
    />
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

 export default connect(mapStateToProps,mapDispatchToProps)(Activity);
