import { appTitle } from "@/_shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Страница не найдена"),
};

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header>
            <h1>Страница не найдена</h1>
          </header>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
