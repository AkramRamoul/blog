import Catlist from "./Catlist";
import MenuPosts from "./MenuPosts";

function Menu() {
  return (
    <div className="flex-[2] mt-[50px] hidden lg:block">
      <h2 className="text-muted-foreground text-base font-normal">Hottest</h2>
      <h1 className="text-2xl">Most popular</h1>
      <MenuPosts />
      <h2 className="text-muted-foreground text-base font-normal">
        Discover by topic
      </h2>
      <h1 className="text-2xl">Categories</h1>
      <Catlist />
    </div>
  );
}

export default Menu;
