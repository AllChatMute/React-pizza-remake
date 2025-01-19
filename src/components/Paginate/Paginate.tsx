import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentPage } from "../../redux/slices/paginateSlice";
import React from "react";

const Paginate: React.FC = () => {
  const dispatch = useAppDispatch();

  const handlePageClick = (event: { selected: number }) => {
    dispatch(setCurrentPage(event.selected));
  };
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
};

export default Paginate;
