import { FC } from "react";
import PaginationButton from "../paginationButton/PaginationButton.component";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

type Props = {
  onNext: () => void;
  onPrev: () => void;
  onClickPage: (page: number) => void;
  visiblePages: number[];
  pages: number;
  next: string | null;
  prev: string | null;
  currPage: number;
};

const PaginationButtons: FC<Props> = ({
  onNext,
  onPrev,
  visiblePages,
  onClickPage,
  pages,
  next,
  prev,
  currPage,
}) => {
  return (
    <Pagination>
      <PaginationContent className="p-0">
        <PaginationItem className="cursor-pointer">
          <PaginationButton
            onClick={() => onPrev()}
            label={"Previous"}
            isDisabled={!Boolean(prev)}
          />
        </PaginationItem>
        {visiblePages.map((page) => {
          const isSelected = currPage === page;
          return (
            <PaginationItem className="hidden md:block" key={page}>
              <PaginationButton
                onClick={() => onClickPage(page)}
                label={page.toString()}
                isDisabled={false}
                className={isSelected ? "bg-muted" : ""}
              />
            </PaginationItem>
          );
        })}
        <PaginationItem className="hidden md:block">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="cursor-pointer hidden md:block">
          <PaginationLink onClick={() => onClickPage(pages)}>
            {pages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationButton
            onClick={() => onNext()}
            label={"next"}
            isDisabled={!Boolean(next)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationButtons;
