import { GetData } from "./GetData";
import { Hero } from "../components/hero/Hero";
import { MainLayout } from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <GetData />
    </MainLayout>
  );
};

export default Home;
