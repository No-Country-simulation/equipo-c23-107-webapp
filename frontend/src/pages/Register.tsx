import Layout from "../layouts/Layout";
import isEmail from "validator/lib/isEmail";
import { useStore } from "exome/react";
import { authStore } from "../core/store/AuthStore";

const Register = () => {
  const { signUp, singUpWithGoogle, loggedIn } = useStore(authStore);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmail(e.currentTarget.email.value)) {
      alert("Email invalido");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log({ name, email, password });
    signUp(email, password, name);
  };

  console.log(loggedIn);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full flex flex-col items-center max-w-md p-8  rounded-lg  border-2 border-black bg-white">
          <h2 className="mb-6 text-lg font-bold text-center text-gray-800">
            Ingresa tus datos:
          </h2>
          <form
            className="flex flex-col items-center space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="max-w-72">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-lg font-bold text-black"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Nombre"
                  required
                  className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold text-black"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Correo Electrónico"
                  aria-describedby="email-help"
                  required
                  className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escribe tu email"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block text-lg font-bold text-black"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  aria-label="Contraseña"
                  required
                  className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escribe tu contraseña"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="confirm-password"
                  className="block text-lg font-bold text-black"
                >
                  Repite tu Contraseña
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  aria-label="Repite tu Contraseña"
                  required
                  className="w-full bg-celesteClaro px-3 py-2 mt-1 text-gray-800 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Repite tu contraseña"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-12 py-2 text-botonPresionado shadow-lg bg-celesteBoton rounded-lg hover:bg-azulClaro focus:ring-4 focus:outline-none"
              >
                Registro
              </button>
            </div>
          </form>
          <button
            type="button"
            onClick={singUpWithGoogle}
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
             mt-4 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>
              Registrarse con <span className="underline">Google</span>
            </p>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
