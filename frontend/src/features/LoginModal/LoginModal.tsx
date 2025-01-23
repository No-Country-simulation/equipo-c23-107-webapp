import "./LoginModal.css"
import { useRef } from "react";
import { useStore } from "exome/react";
import { authStore } from "../../core/store/AuthStore";
import isEmail from 'validator/lib/isEmail';

const LoginModal: React.FC = () => {
  const { setModalOpen } = useStore(authStore);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
    if (usernameRef.current || passwordRef.current) {
      console.log(usernameRef.current?.value, passwordRef.current?.value);
      if (isEmail(usernameRef.current?.value || '')) {
        console.log('Email valido');
      } else {
        alert('Email invalido');
      }
      if (passwordRef.current?.value && passwordRef.current.value.length < 6) {
        alert('Contraseña muy corta');
      }
    }

  }
  return (
    <dialog id="login-modal" className="LoginModal" >
      <div >
        <p onClick={ () => setModalOpen(false) }>X</p>
        <form onSubmit={ handleSubmit }>
          <input type="text" placeholder="Username" ref={ usernameRef } />
          <input type="password" placeholder="Password" ref={ passwordRef } />
          <button type="submit">Login</button>
        </form>
      </div>
    </dialog>
  );
}

export default LoginModal;