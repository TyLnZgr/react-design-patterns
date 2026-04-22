import Modal from "./Problems/Modal";
import "./App.css";
import SolutionModal from "./SolutionwithPattern/SolutionModal";
import { useState } from "react";
import AccordionDemo from "./SolutionwithPattern/AccordionDemo";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    /* <div className="flex flex-col items-center">
      <Modal
        title="Delete Account"
        body="Are you sure you want to delete account"
        primaryAction={<button>Delete</button>}
        secondaryAction={<button>Cancel</button>}
      />
    </div> */

    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <SolutionModal isOpen={isOpen} onClose={handleCloseModal}>
        <SolutionModal.Header>
          <h1>Welcome</h1>
        </SolutionModal.Header>
        <SolutionModal.Body>
          <p>This is modal built with Compound Component Patterns</p>
          <AccordionDemo />
        </SolutionModal.Body>
        <SolutionModal.Footer>
          <button onClick={handleCloseModal}>Close</button>
          <button>Action</button>
        </SolutionModal.Footer>
      </SolutionModal>
    </div>
  );
}

export default App;
