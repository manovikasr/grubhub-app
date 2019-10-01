import React, { Component } from "react";
import { Card, ListGroup, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
class ItemCard extends Component {
  render() {
    let imageSrc = "http://localhost:3001/grubhub/images/item/" + this.props.menu_item.item_image;
    return (
      <Card bg="white" style={{ width: "50rem", height: "8rem", margin: "2%" }}>
        <Row>
          <Col>
            <Card.Img style={{ width: "12rem", height: "8rem"}} src={imageSrc} />
          </Col>
          <Card.Body>
            <Card.Title>{this.props.menu_item.item_name}</Card.Title>
            <Card.Text>{this.props.menu_item.item_description}</Card.Text>
            <Card.Text>Price: $ {this.props.menu_item.item_price}</Card.Text>
            </Card.Body>
            <Col align="right">
              <Button variant="link" href="/menu/item/update" onClick={this.props.onUpdateClick} name={this.props.menu_item.item_id}>Edit</Button>&nbsp;
              <Button variant="link" onClick={this.props.deleteItem} name={this.props.menu_item.item_id}>Delete</Button>
            </Col>
        </Row>
      </Card>
    );
  }
}

export default ItemCard;