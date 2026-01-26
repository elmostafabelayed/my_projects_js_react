import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Affichage({ stg, show, close }) {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{stg.nom}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="" alt="" />
        <p className="text-muted">
          Email: {stg.email} <br />
          Niveau: {stg.niveau == "t"
            ? "Technicien"
            : "Technicien spécialisé"}{" "}
          <br />
          Téléphone: {stg.tel}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
