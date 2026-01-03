import { Modal, Button } from "react-bootstrap";

export default function ExampleModal({ show, handleClose, stagiaire }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Détails du stagiaire</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {stagiaire && (
          <>
            <p><strong>Nom :</strong> {stagiaire.nom}</p>
            <p><strong>Email :</strong> {stagiaire.email}</p>
            <p><strong>Niveau :</strong> {stagiaire.niveau}</p>
            <p><strong>Téléphone :</strong> {stagiaire.tel}</p>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}