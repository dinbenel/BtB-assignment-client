import { useMemo } from "react";

type UseVisiblePages = (currentPage: number, totalPages: number) => number[];

const useVisiblePages: UseVisiblePages = (currentPage, totalPages) => {
  return useMemo(() => {
    let pages: number[] = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages = [1, 2, 3];
      } else if (currentPage === totalPages) {
        pages = [totalPages - 3, totalPages - 2, totalPages - 1];
      } else {
        pages = [currentPage - 1, currentPage, currentPage + 1];
      }
    }
    return pages;
  }, [currentPage, totalPages]);
};

export default useVisiblePages;
