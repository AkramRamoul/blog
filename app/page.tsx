import { getCategory } from "@/actions/actions";
import CategoryList from "./components/CategoryList";
import Featured from "./components/Featured";
import CardList from "./components/Card/CardList";
import Menu from "./components/Menu/Menu";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const page = (await searchParams).page || 1;
  const categories = await getCategory();

  return (
    <div>
      <Featured />
      <CategoryList data={categories} />
      <div className="flex gap-[50px]">
        <CardList page={page} cat="" />
        <Menu />
      </div>
    </div>
  );
}
