import React,{Component} from 'react';
import data from '../JsonData/highlights.json';
import { connect }  from 'react-redux';
import { storeValue } from '../action/DataActions';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
class Highlights extends  Component {

  componentDidMount()
  {
      this.props.storeValue(data);
  }





  render(){

    console.log("highlights---", this.props.highlights);


const output = this.props.highlights.map((highlights) =>
  <Col   style={{padding:'50px'}}>
       <Card body  md="3" style={{wdith:"250px"}}>
      <CardTitle>{highlights.id}</CardTitle>
      <CardText>{highlights.name}</CardText>
        <CardText>{highlights.Designation}</CardText>
    </Card>
  </Col>
);
    return (
      <div>
          <h4 align="center">Highlights Of Employees</h4>
<Row style={{display:'inline-flux'}}>
        {output}
</Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    storeValue: data => dispatch(storeValue(data)),
  }
}

const mapStateToProps = (data) => {
  const highlights=data.highlights;
  return {highlights};
}

 export default connect(mapStateToProps,mapDispatchToProps)(Highlights) ;
