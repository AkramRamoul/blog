import CardList from "@/app/components/Card/CardList";
import CategoryList from "@/app/components/CategoryList";
import Featured from "@/app/components/Featured";
import Menu from "@/app/components/Menu/Menu";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const page = (await searchParams).page || 1;
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px] ">
        <CardList page={page} cat="" />
        <Menu />
      </div>
    </div>
  );
}
