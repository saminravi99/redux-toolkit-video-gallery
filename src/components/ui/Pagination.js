import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosForPagination, setPageNumber } from "../../features/pagination/paginationSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const { videosLength } = useSelector((state) => state.pagination);
  console.log(videosLength);
  const videosPerPage = 8;
  const [isActivePage, setActivePage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(videosLength / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (page) => {
    setActivePage(page);
    dispatch(setPageNumber(page));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumbers.map((number) => (
          <div
            key={number}
            onClick={() => handlePageChange(number)}
            className={` cursor-pointer
            ${
              isActivePage === number
                ? "bg-blue-600"
                : "bg-blue-200 text-black hover:bg-blue-600 hover:text-white"
            }
           text-white px-4 py-1 rounded-full`}
          >
            {number}
          </div>
        ))}
      </div>
    </section>
  );
}
