import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";

const HomePage = () => {
  return (
    <>
      <Layout page="home">
        <div>Home</div>
      </Layout>
    </>
  );
};

export const Home = withAuth(HomePage);
