import CardList from "@/app/components/Card/CardList";
import Menu from "@/app/components/Menu/Menu";

function Home() {
  return (
    <div>
      <h1 className="text-3xl text-white rounded-sm bg-orange-600 p-4 text-center py-[5px] px-[10px]">
        Style blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Home;
