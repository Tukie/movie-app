import SectionTitle from "../components/SectionTitle";
import WaitList from "./components/WaitList";

export const metadata = {
  title: "Waiting | Movie App",
};

export default function Waiting() {
  return (
    <div>
      <div className="mb-10">
        <SectionTitle title="Waiting" />
      </div>
      <WaitList />
    </div>
  );
}
