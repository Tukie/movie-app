import SectionTitle from "../components/SectionTitle";
import SearchClientWrapper from "./components/SearchClientWrapper";

export const metadata = {
  title: "Search | Movie App",
};

export default function Search() {
  return (
    <div>
      <div className="mb-10">
        <SectionTitle title="Search" />
      </div>

      <SearchClientWrapper />
    </div>
  );
}
