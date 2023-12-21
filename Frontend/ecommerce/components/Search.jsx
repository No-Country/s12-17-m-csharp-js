import { debounce } from "lodash";
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { usePushQueryString } from "@/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const pushQueryString = usePushQueryString();
  const { watch, setValue, register } = useForm();
  const name = watch("name");

  const debouncedSearch = useState(() =>
    debounce((name) => {
      pushQueryString({ name });
    }, 700)
  )[0];

  useEffect(() => {
    debouncedSearch(name);
  }, [name, debouncedSearch]);

  useEffect(() => {
    setValue("name", searchParams.get("name") ?? "");
  }, [searchParams, setValue]);

  return (
    <div className="relative h-full py-3">
      <input
        {...register("name")}
        className="h-full w-80 rounded-md bg-gray-200 px-4 outline-gray-500 placeholder:text-gray-700"
        placeholder="Buscar"
      />
      {name ? (
        <IoCloseSharp
          className="absolute right-2 top-5 text-primary hover:cursor-pointer"
          size={24}
          onClick={() => {
            router.push(pathname, { scroll: false });
          }}
        />
      ) : (
        <IoIosSearch
          className="absolute right-2 top-5 text-primary"
          size={25}
        />
      )}
    </div>
  );
};
export default Search;
