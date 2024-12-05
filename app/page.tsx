import CardList from "@/app/components/Card/CardList";
import CategoryList from "@/app/components/CategoryList";
import Featured from "@/app/components/Featured";
import Menu from "@/app/components/Menu/Menu";

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: number;
  };
}) {
  const page = searchParams.page || 1;
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px] ">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
