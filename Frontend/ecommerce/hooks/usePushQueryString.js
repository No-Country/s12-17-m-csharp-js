import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const usePushQueryString = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const newParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  return useCallback(
    (params) => {
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      });

      router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    },
    [newParams, pathname, router]
  );
};

export default usePushQueryString;
