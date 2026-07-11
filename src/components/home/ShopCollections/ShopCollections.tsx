import CollectionCard from "./CollectionCard";
import { collectionsData } from "./collectionsData";

const ShopCollections = () => {
  return (
    <section className="py-3">
      <div className="">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {collectionsData.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCollections;
