import React from "react";
import FlatList from "flatlist-react";
import Logo from "../assets/logo.png";
import Blog1 from "../assets/blogs/blog1.jpg";
import Blog2 from "../assets/blogs/blog2.jpg";
import Blog3 from "../assets/blogs/blog3.jpg";
import {ListCard} from "@/partials/List.jsx";

const products = [
  {
    title: "Products #1",
    about: "Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-1",
    thumbnail: Blog1,
  },
  {
    title: "Products #2",
    about: "Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-2",
    thumbnail:
      "https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Products #3",
    about: "Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-3",
    thumbnail:
      "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Products #1",
    about: "Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-1",
    thumbnail: Blog1,
  },
  {
    title: "Products #2",
    about: "Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-2",
    thumbnail:
      "https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Products #3",
    about: "Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt eum esse possimus maxime saepe optio? Assumenda ullam qui tempora dolore deserunt, iusto delectus quia recusandae numquam, voluptas totam? Tempore, eius reprehenderit! Tempora blanditiis tenetur aliquam cumque porro illo perspiciatis eligendi itaque ea consequatur nisi, dicta quae sit suscipit commodi quia, aut vel modi, ullam sapiente? Perferendis facilis laborum, voluptatum aperiam necessitatibus id odio.",
    price: "500",
    slug: "product-3",
    thumbnail:
      "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
];

function AllProducts() {
  return (
    <div className="mt-3 md:mt-0">
      {/* <h1 className="font-sigmar text-fuchsia-300 underline decoration-dashed underline-offset-8 text-2xl md:text-4xl mb-2 md:mb-9">
        Our Best Sellers
      </h1> */}
      <input
        type="text"
        placeholder="Search🔎"
        color="white"
        className=" w-full text-white font-poppins mt-3 md:mt-3 p-3 md:p-3 bg-transparent border-2 rounded-md border-purple-500 hover:border-white transform ease-linear duration-300"
      />
      <div className="my-2 md:my-4">
        <ListCard item={products} />
      </div>
    </div>
  );
}

export default AllProducts;
