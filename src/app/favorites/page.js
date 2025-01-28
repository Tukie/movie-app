import SectionTitle from "../components/SectionTitle";
import FavoritesList from "./components/FavoritesList";

export const metadata = {
  title: "Favorites | Movie App",
};

export default function Favorites() {
  return (
    <div>
      <div className="mb-10">
        <SectionTitle title="Favorites" />
      </div>
      <FavoritesList />
    </div>
  );
}
