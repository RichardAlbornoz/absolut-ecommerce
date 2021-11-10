import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({producto}) =>{

    return(
        <Card key={producto.id} style={{ width: "18rem"}}>
            <Link to={`/item/${producto.id}`}>
                <Card.Img variant="top" src={producto.foto} style={{maxHeight: "200px"}}/>
            </Link>
            <Card.Body style={{height:"15rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>$ {producto.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Item;