function Pagination({ total, currentPage, onClickCallback }) {
  const pages = new Array(total).fill(0).map((num, idx) =>
    currentPage === idx + 1 ? (
      <button disabled key={idx}>
        {idx + 1}
      </button>
    ) : (
      <button key={idx} onClick={() => onClickCallback(idx + 1)}>
        {idx + 1}
      </button>
    )
  );

  return <div>{pages}</div>;
}

export default Pagination;
