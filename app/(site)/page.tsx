import { appTitle } from "@/_shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Страница не найдена"),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>СтройСтальПроект</h1>
      </header>
    </section>
  );
};

export default Home;
