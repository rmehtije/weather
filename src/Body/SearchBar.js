import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchFrom from './SearchForm';

function SearchBar({ show, handleClose }) {
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <SearchFrom />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default SearchBar;