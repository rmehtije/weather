import Offcanvas from "react-bootstrap/Offcanvas";
import ExportDataForm from "./ExportDataForm";
import SearchForm from "./SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { setShowSearchBar } from "../services/stateService";

function SearchBar() {
  console.log('SearchBar');
  
  // useSelector eto react-redux hook dlja slushanija sostojanija redux.
  // pri izmenenii sostojanija useSelector zapskajet render komponenta.
  const showSearchBar = useSelector((state) => state.showSearchBar);

  // useDispatch eto react-redux hook dlja trigera izmenija sostojanija
  // useDispatch snochala nuzhno inicializirovat' a potom ispol'zovat'.
  // useDispatch vozvrashajet funkcqju dispatcher.
  const dispatch = useDispatch();

  // dispatcheru my peredajom Action s novqmi dannqmi.
  const handleClose = () => dispatch(setShowSearchBar(false));

  return (
    <Offcanvas show={showSearchBar} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm
          handleCloseBar={handleClose}
        />
        <ExportDataForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchBar;
