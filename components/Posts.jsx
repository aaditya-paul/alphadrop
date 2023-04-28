import React from "react";
import FlatList from "flatlist-react";
import Logo from "../assets/logo.png";
import Blog1 from "../assets/blogs/blog1.jpg";
import Blog2 from "../assets/blogs/blog2.jpg";
import List from "@/partials/List";

const products = [
  {
    title: "Products #1",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-1",
    thumbnail: Blog1,
  },
  {
    title: "Products #2",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-2",
    thumbnail: Blog1,
  },
  {
    title: "Products #3",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-3",
    thumbnail: Blog2,
  },
];

function Posts() {
  return (
    <div className="mt-3 md:mt-5">
      <h1 className="font-sigmar text-fuchsia-300 underline decoration-dashed underline-offset-8 text-2xl md:text-4xl mb-2 md:mb-9">
        Our Best Sellers
      </h1>
      <List item={products} />
    </div>
  );
}

export default Posts;
