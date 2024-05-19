import useVisiblePages from "@/hooks/useGetVisiblePage";
import PaginationButtons from "@/shared/Pagination/PaginationButtons.component";
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
    <PaginationButtons
      onClickPage={onClickPage}
      onNext={onNext}
      onPrev={onPrev}
      pages={pages}
      visiblePages={visiblePages}
    />
  );
};

export default CharacterPagination;
