import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishdetailComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  render() {
    let dish = this.props.dishes;
    return (
      <div className="row">
        <div className="col-12 col-md-5 col-sm-12">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 col-sm-12">
          <CardTitle>Comments</CardTitle>
          {this.props.dishes.comments.map((comment) => {
            return (
              <ul className="list-unstyled">
                <li>{comment.comment}</li>
                <li>
                  --{comment.author} , {comment.date}{" "}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
