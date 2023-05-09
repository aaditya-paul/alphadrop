import React from "react";
import {useRouter} from "next/router";
import Header from "@/components/Header";
import ProductSingle from "@/components/ProductsSingle";

function Index() {
  const router = useRouter();
  const {slug} = router.query;
  console.log(slug);

  return (
    <>
      <Header />
      <div className="h-full m-2 md:m-0 md:w-5/6 md:p-5 pt-0 ">
        <ProductSingle slug={slug} />
      </div>
    </>
  );
}

export default Index;
