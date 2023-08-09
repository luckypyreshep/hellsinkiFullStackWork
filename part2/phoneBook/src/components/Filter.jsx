const Filter = ({ updateSearch }) => {
  return (
    <div>
      filter shown with <input onChange={(e) => updateSearch(e)} />
    </div>
  );
};

export default Filter;
