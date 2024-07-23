import Container from "react-bootstrap/Container";

export const ItemListContainer = (props) => {
  return (
    //CENTRAR EL CONTAINER
    <Container className="mt-4">
      {/*eslint-disable-next-line react/prop-types*/}
      <h1>{props.greeting}</h1>
    </Container>
  );
};
