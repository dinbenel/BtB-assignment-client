import useVisiblePages from "@/hooks/useGetVisiblePage";
import PaginationButtons from "@/shared/Pagination/PaginationButtons.component";
import { useLocationStore } from "@/store/location.store";
import { usePaginationStore } from "@/store/pagination.store";
import { useLocation } from "react-router-dom";

const LocationPagination = () => {
  const location = useLocation();

  const { currPage, pages, next, prev } = usePaginationStore((state) => ({
    pages: state.pages,
    currPage: state.currPage,
    prev: state.prev,
    next: state.next,
  }));

  const { getAllByPage } = useLocationStore((state) => ({
    getAllByPage: state.getAllLocations,
  }));

  const visiblePages = useVisiblePages(currPage, pages);
  const onNext = () => {
    if (!next) return;
    const page = currPage + 1;
    const url = `${location.search}&page=${page}`.replace("?", "").trim();
    getAllByPage(url, page);
  };

  const onPrev = () => {
    if (!prev) return;
    const page = currPage - 1;
    const url = `${location.search}&page=${page}`.replace("?", "").trim();
    getAllByPage(url, page);
  };

  const onClickPage = (page: number) => {
    const url = `${location.search}&page=${page}`.replace("?", "").trim();
    getAllByPage(url, page);
  };

  return (
    <PaginationButtons
      onClickPage={onClickPage}
      onNext={onNext}
      onPrev={onPrev}
      pages={pages}
      visiblePages={visiblePages}
      next={next}
      prev={prev}
      currPage={currPage}
    />
  );
};

export default LocationPagination;
