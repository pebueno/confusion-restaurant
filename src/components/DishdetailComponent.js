import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(comments) {
    if (comments != null) {
      const listItems = comments.map((comment) => {
        const options = {
          year: "numeric",
          month: "short",
          day: "2-digit",
        };
        const commentDate = new Date(comment.date.slice(0, 10));
        const commentFormatedDate = commentDate.toLocaleString("eng", options);

        return (
          <li key={comment.id}>
            {comment.comment}
            <p>
              -- {comment.author} , {commentFormatedDate}{" "}
            </p>
          </li>
        );
      });
      return <ul className="list-unstyled">{listItems}</ul>;
    } else {
      return <div></div>;
    }
  }

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
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
