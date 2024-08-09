const ResetButton = ({ onClick, count }) => {
  console.log(onClick, count);

  return (
    <div>
      {count > 0 && (
        <div>
          <button style={{ backgroundColor: "lightgreen" }} onClick={onClick}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetButton;
