import React from "react"; 

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
 

  const handlePrev = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1} className="pagination-btn">
        ❮
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`pagination-btn ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        );
      })}

      <button onClick={handleNext} disabled={currentPage === totalPages} className="pagination-btn">
        ❯
      </button>
    </div>
  );
};

export default Pagination;
