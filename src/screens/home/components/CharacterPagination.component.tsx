import useVisiblePages from "@/hooks/useGetVisiblePage";
import PaginationButtons from "@/shared/Pagination/PaginationButtons.component";
import { useCharacterStore } from "@/store/character.store";
import { usePaginationStore } from "@/store/pagination.store";

const CharacterPagination = () => {
  const {
    currPage,
    pages,
    onNextLink,
    onPrevLink,
    setCurrentPage,
    next,
    prev,
  } = usePaginationStore((state) => ({
    pages: state.pages,
    onNextLink: state.onNext,
    onPrevLink: state.onPrev,
    currPage: state.currPage,
    setCurrentPage: state.setCurrentPage,
    prev: state.prev,
    next: state.next,
  }));

  const visiblePages = useVisiblePages(currPage, pages);
  const onNext = () => {
    onHandleApiCall(onNextLink);
  };

  const onPrev = () => {
    onHandleApiCall(onPrevLink);
  };

  const onClickPage = (page: number) => {
    const cb = setCurrentPage.bind({}, page);
    onHandleApiCall(cb);
  };

  const onHandleApiCall = async (cb: () => Promise<any>) => {
    useCharacterStore.setState({ isLoading: true });
    const data = await cb();
    if (data) {
      useCharacterStore.setState({ characters: data.results });
    }
    useCharacterStore.setState({ isLoading: false });
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
