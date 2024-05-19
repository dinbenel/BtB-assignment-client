import { FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type Props = {
  onNext: () => void;
  onPrev: () => void;
  onClickPage: (page: number) => void;
  visiblePages: number[];
  pages: number;
};

const PaginationButtons: FC<Props> = ({
  onNext,
  onPrev,
  visiblePages,
  onClickPage,
  pages,
}) => {
  return (
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
  );
};

export default PaginationButtons;
