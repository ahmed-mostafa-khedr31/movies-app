import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPageCount } from '../data/moviesSlice';


const PaginationBar = () => {

  const dispatch = useDispatch()
  const pages = useSelector(state => state.movies.pagesnum)
  const currentPage = useSelector(state => state.movies.currentPage); // Assuming you have currentPage in your state

  // dispatch actions

  useEffect(() => {
    dispatch(getPageCount(currentPage || 1)); // Fetch movies for the first page by default
  }, [dispatch, currentPage]);


  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1; // ReactPaginate uses zero-based index
    dispatch(getPageCount(selectedPage)); // Dispatch action to fetch movies for the selected page
  };







  return (
    <>

      <ReactPaginate
        style={{ backgroundColor: "red" }}
        breakLabel="...."
        nextLabel=" >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pages > 500 ? pages - 34831 : pages}
        previousLabel="<"

        containerClassName={"pagination justify-content-center p-2 my-3  "}
        pageClassName={"page-item xx"}
        pageLinkClassName={"page-link text-dark"}
        previousClassName={'page-item '}
        previousLinkClassName={"page-link n-p xx"}
        nextClassName={'page-item'}
        nextLinkClassName={"page-link n-p xx"}
        breakClassName={"page-item xx"}
        breakLinkClassName={"page-link "}
        activeClassName={"active  text-light xx"}
        activeLinkClassName={"xx bg-light  border-0 "}

      />

    </>
  );
}

export default PaginationBar;