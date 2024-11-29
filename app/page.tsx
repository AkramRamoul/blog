import CardList from "@/components/Card/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px] ">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
