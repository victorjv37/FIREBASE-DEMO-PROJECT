import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/esm/Badge";

const AppDashboard = () => {
  const [player, setPlayer] = useState("");
  const [messiError, setMessiError] = useState(false);
  const [probability, setProbability] = useState("");
  const [playersList, setPlayersList] = useState([]);

  const handleAddPlayer = () => {
    if (player === "messi") {
      setMessiError(true);
      return;
    }
    if (player && probability) {
      setMessiError(false);
      setPlayersList([...playersList, { player, probability }]);
      setPlayer("");
      setProbability("");
    }
  };

  const handleDeletePlayer = (index) => {
    const newList = playersList.filter((_, i) => i !== index);
    setPlayersList(newList);
  };

  return (
    <div>
      <h2>
        {" "}
        <Badge>
          TE HAS IDENTIFICADO BIEN! <br /> BIENVENIDX A LA GALA BALON DE ORO
        </Badge>
      </h2>
      <Stack gap={3}>
        <Form className="p-5">
          <Form.Group controlId="formPlayer" className="p-2">
            <Form.Label>Jugador que quieras</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce el nombre del jugador"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
            />
          </Form.Group>
          {messiError && (
            <p style={{ color: "red" }}>
              No tienes ni idea de futbol amigo, introduce otro jugador
            </p>
          )}

          <Form.Group controlId="formProbability" className="p-2">
            <Form.Label>Probabilidad de ganar el Balón de Oro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce la probabilidad (%)"
              value={probability}
              onChange={(e) => setProbability(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleAddPlayer}>
            Añadir
          </Button>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Jugador</th>
              <th>Probabilidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {playersList.map((item, index) => (
              <tr key={index}>
                <td>{item.player}</td>
                <td>{item.probability}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeletePlayer(index)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>
    </div>
  );
};

export default AppDashboard;
