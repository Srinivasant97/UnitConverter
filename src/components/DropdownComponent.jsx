import Dropdown from "react-bootstrap/Dropdown";

function DropdownComponent(props) {
  const { units, activeUnit, selectedUnit } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {activeUnit}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {units.map((unit) => (
          <Dropdown.Item key={unit.label} onClick={() => selectedUnit(unit)}>
            {unit.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default DropdownComponent;
