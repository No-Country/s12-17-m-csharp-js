"use client";
import { categoryService } from "@/services";
import { useEffect, useState } from "react";
import Link from "next/link";

const categoryNames = ["Muebles", "Games", "Celulares"];

const Categories = () => {
  const [categoryIds, setCategoryIds] = useState({
    Muebles: "",
    Games: "",
    Celulares: "",
  });

  useEffect(() => {
    for (const categoryName of categoryNames) {
      categoryService.getCategoryByName(categoryName).then((category) => {
        setCategoryIds((prev) => ({
          ...prev,
          [categoryName]: category.id,
        }));
      });
    }
  }, []);

  return (
    <ul className="grid gap-9 px-4 py-16 md:grid-cols-3">
      <Link
        href={`/products?categoryId=${categoryIds.Muebles}`}
        className="transition-transform hover:scale-105"
      >
        <li className="relative flex h-96 items-center justify-center rounded-2xl bg-[url('/assets/category.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-green-800">
          <span className="z-10 text-3xl font-semibold uppercase text-white">
            Muebles
          </span>
        </li>
      </Link>
      <Link
        href={`/products?categoryId=${categoryIds.Games}`}
        className="transition-transform hover:scale-105"
      >
        <li className="relative flex h-96 items-center justify-center rounded-2xl bg-[url('/assets/category2.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-green-800">
          <span className="z-10 text-3xl font-semibold uppercase text-white">
            Gaming
          </span>
        </li>
      </Link>
      <Link
        href={`/products?categoryId=${categoryIds.Celulares}`}
        className="transition-transform hover:scale-105"
      >
        <li className="relative flex h-96 items-center justify-center rounded-2xl bg-[url('/assets/category3.webp')] bg-cover bg-center before:absolute before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-green-800">
          <span className="z-10 text-3xl font-semibold uppercase text-white">
            Celulares
          </span>
        </li>
      </Link>
    </ul>
  );
};

export default Categories;
