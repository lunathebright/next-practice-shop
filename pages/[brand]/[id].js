import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout";

export default function Detail() {
  const route = useRouter();
  const [itemInfo, setItemInfo] = useState(null);

  useEffect(() => {
    fetch(`/data/data.json`)
      .then((res) => res.json())
      .then((res) => {
        setItemInfo(res.data.filter((item) => item.model === route.query.id));
      });
  }, [route.query.id]);

  return (
    <Layout>
      <section>
        {itemInfo && (
          <div>
            <Image
              alt={itemInfo[0].model}
              src={itemInfo[0].image}
              width="200"
              height="200"
            />
            <span>{itemInfo[0].model}</span>
            <span>{itemInfo[0].price}</span>
          </div>
        )}
      </section>
    </Layout>
  );
}
