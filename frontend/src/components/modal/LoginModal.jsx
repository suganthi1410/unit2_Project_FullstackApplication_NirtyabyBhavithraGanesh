import Modal from "./Modal.jsx";
import LoginPage from "../loginpage/Login.jsx";

function LoginModal({ onClose, onLogin }) {
  return (
    <Modal onClose={onClose}>
      <LoginPage onLogin={onLogin} />
    </Modal>
  );
}

export default LoginModal;
