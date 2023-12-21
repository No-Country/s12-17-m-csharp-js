import { usePushQueryString } from "@/hooks";

const Pagination = ({ pageNumber, totalPages }) => {
  const pushQueryString = usePushQueryString();

  const handlePageChange = (pageNumber) => {
    pushQueryString({ pageNumber });
  };

  const handlePrevious = () => {
    if (pageNumber > 1) {
      pushQueryString({ pageNumber: pageNumber - 1 });
    }
  };

  const handleNext = () => {
    if (pageNumber < totalPages) {
      pushQueryString({ pageNumber: pageNumber + 1 });
    }
  };

  return (
    totalPages > 1 && (
      <div className="flex justify-center">
        {pageNumber > 1 && (
          <button
            onClick={handlePrevious}
            className="mx-1 rounded border px-3 py-2 text-sm text-info"
          >
            Anterior
          </button>
        )}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`mx-1 rounded border px-3 py-2 text-sm ${
              pageNumber === i + 1 ? "bg-[#f2ecf7] text-blue-950" : "text-info"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {pageNumber < totalPages && (
          <button
            onClick={handleNext}
            className="mx-1 rounded border px-3 py-2 text-sm text-info"
          >
            Siguiente
          </button>
        )}
      </div>
    )
  );
};

export default Pagination;
