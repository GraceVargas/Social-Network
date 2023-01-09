import { FC } from "react";
import { Pagination as PaginationBts } from "react-bootstrap";

type Props = {
  current: number;
  total: number;
  onChangePage: (page: number) => void;
};

const Pagination: FC<Props> = ({ current, total, onChangePage }) => {
  // let items = [];
  return (
    <PaginationBts>
      <PaginationBts.Item
        onClick={() => onChangePage(1)}
        disabled={current === 1}
      >
        {"<<"}
      </PaginationBts.Item>
      {current > 2 && (
        <PaginationBts.Item onClick={() => onChangePage(current - 2)}>
          {current - 2}
        </PaginationBts.Item>
      )}
      {current > 1 && (
        <PaginationBts.Item onClick={() => onChangePage(current - 1)}>
          {current - 1}
        </PaginationBts.Item>
      )}
      <PaginationBts.Item disabled>{current}</PaginationBts.Item>
      {current < total - 3 && (
        <PaginationBts.Item onClick={() => onChangePage(current + 1)}>
          {current + 1}
        </PaginationBts.Item>
      )}
      {current < total - 2 && (
        <PaginationBts.Item onClick={() => onChangePage(current + 2)}>
          {current + 2}
        </PaginationBts.Item>
      )}
      <PaginationBts.Item onClick={() => onChangePage(total)}>
        {">>"}
      </PaginationBts.Item>
    </PaginationBts>
  );
};

export { Pagination };
