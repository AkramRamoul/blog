import CardList from "@/app/components/Card/CardList";
import Menu from "@/app/components/Menu/Menu";

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ cat: string; page: number }>;
}) {
  const page = (await searchParams).page || 1;
  const cat = (await searchParams).cat || "";
  return (
    <div>
      <h1 className="capitalize font-bold text-3xl text-white rounded-sm bg-orange-600 p-4 text-center py-[5px] px-[10px]">
        {cat} blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}

export default Home;
