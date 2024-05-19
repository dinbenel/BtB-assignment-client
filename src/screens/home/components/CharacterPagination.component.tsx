import useVisiblePages from "@/hooks/useGetVisiblePage";
import PaginationButtons from "@/shared/Pagination/PaginationButtons.component";
import { useCharacterStore } from "@/store/character.store";
import { usePaginationStore } from "@/store/pagination.store";
import { useLocation } from "react-router-dom";

const CharacterPagination = () => {
  const location = useLocation();

  const { currPage, pages, next, prev } = usePaginationStore((state) => ({
    pages: state.pages,
    currPage: state.currPage,
    prev: state.prev,
    next: state.next,
  }));

  const { getAllByPage } = useCharacterStore((state) => ({
    getAllByPage: state.getAllCharacters,
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

export default CharacterPagination;
