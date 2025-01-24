import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentPage } from "../../redux/slices/paginateSlice";
import React, { useCallback } from "react";

const Paginate: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const handlePageClick = useCallback(
    (event: { selected: number }) => {
      dispatch(setCurrentPage(event.selected));
    },
    [dispatch]
  );
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  );
});

export default Paginate;
