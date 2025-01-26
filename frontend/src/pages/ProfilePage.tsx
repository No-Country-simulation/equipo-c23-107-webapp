import Layout from "../layouts/Layout";
import { useStore } from "exome/react";
import { authStore } from "../core/store/AuthStore";

const ProfilePage = () => {
  const { logout } = useStore(authStore);
  return (
    <Layout>
      <h1>Profile Page</h1>
      <button onClick={ logout }>Cerrar sessión</button>
    </Layout>
  )
};

export default ProfilePage;
