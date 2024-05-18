import useVisiblePages from "@/hooks/useGetVisiblePage";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";
import { usePaginationStore } from "@/store/pagination.store";

const CharacterPagination = () => {
  const { currPage, pages, onNextLink, onPrevLink, setCurrentPage } =
    usePaginationStore((state) => ({
      pages: state.pages,
      onNextLink: state.onNext,
      onPrevLink: state.onPrev,
      currPage: state.currPage,
      setCurrentPage: state.setCurrentPage,
    }));

  const visiblePages = useVisiblePages(currPage, pages);
  const onNext = () => {
    onNextLink();
  };

  const onPrev = () => {
    onPrevLink();
  };

  const onClickPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <Pagination>
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={onPrev} />
          </PaginationItem>
          {visiblePages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink href="#" onClick={() => onClickPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={() => onClickPage(pages)}>
              {pages}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={onNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CharacterPagination;
