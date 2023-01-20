import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import "./body.scss";
import SearchBar from "./SearchBar";
import Now from "./Tabs/Now";
import Forecast from "./Tabs/Forecast";
import { useDispatch } from "react-redux";
import { setShowSearchBar } from "../services/stateService";

function Body() {
  console.log('Body');

  const dispatch = useDispatch();

  const handleShowBar = () => dispatch(setShowSearchBar(true));

  return (
    <>
      <Button className="mb-4" variant="primary" onClick={handleShowBar}>
        Search
      </Button>

      <SearchBar />

      <Tabs
        defaultActiveKey="now"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="now" title="Now">
          <Now />
        </Tab>
        <Tab eventKey="forecast" title="Forecast">
          <Forecast />
        </Tab>
      </Tabs>
    </>
  );
}

export default Body;
