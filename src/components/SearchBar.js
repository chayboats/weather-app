import Row from './Row';
import FlexSpace from './FlexSpace';
export default function SearchBar(props) {
  const { handleSubmit, search, setSearchValue } = props;

  return (
    <form
      className="search"
      onSubmit={handleSubmit}
    >
      <Row>
        <input
          type="text"
          id="search-input"
          value={search}
          onChange={setSearchValue}
          placeholder="Enter a city or country"
        />
        <FlexSpace />
        <button
          id="search-button"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </Row>
    </form>
  );
}
