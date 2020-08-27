import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
	const { img, title, author, rating, price } = props.course;
	return (
		<Col lg={4} md={6}>
			<Card>
				<img src={img} alt="" />
				<Card.Body>
					<div>
						<b>{title}</b>
					</div>
					<div>
						<b>Author:</b> {author}
					</div>
					<div>
						<b>Rating:</b> {rating}
					</div>
					<p>
						<b>Price:</b> ${price}
					</p>
					<Button variant="success" size="sm" block onClick={() => props.handleEnrollNow(props.course)}>
						<FontAwesomeIcon icon={faShoppingCart} /> Enroll now
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Course;
