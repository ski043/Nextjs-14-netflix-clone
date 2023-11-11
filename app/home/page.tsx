import MovieVideo from "../components/MovieVideo";
import Navbar from "../components/Navbar";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold ">Recently Added</h1>
      <RecentlyAdded />
    </div>
  );
}
