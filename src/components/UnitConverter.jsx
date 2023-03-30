import Button from "react-bootstrap/Button";
import DropdownComponent from "./DropdownComponent";
import { useState } from "react";

function UnitConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Meter");
  const [toUnit, setToUnit] = useState("Meter");
  const [valueInMeter, setValueInMeter] = useState(1);
  const [rightSideValue, setRightSideValue] = useState(1);
  const [result, setResult] = useState("");
  // Depend on the Unit value, result will change, value should be 1 meter for every unit.
  const units = [
    { label: "Meter", value: 1 },
    { label: "Kilometer", value: 1000 },
    { label: "Centimeter", value: 0.01 },
  ];
  const fromUnitSelected = (unit) => {
    setFromUnit(unit.label);
    setValueInMeter(unit.value);
  };
  const toUnitSelected = (unit) => {
    setToUnit(unit.label);
    setRightSideValue(unit.value);
  };
  const changeInput = (e) => {
    if (e.target.value >= 0) {
      setValue(e.target.value);
    }
  };
  const convertUnit = () => {
    const ans = (value * valueInMeter) / rightSideValue;
    setResult(`${value} ${fromUnit} = ${ans} ${toUnit}`);
  };
  return (
    <div className="unitconverter-container">
      Length Converter
      <div className="from-container">
        <div className="units-heading">Input</div>
        <div>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the Number"
            value={value}
            onChange={changeInput}
          />
        </div>
      </div>
      <div className="dropdown-wrapper">
        <div className="dropdown-selector1">
          <div className="units-heading">From Unit:</div>
          <DropdownComponent
            units={units}
            activeUnit={fromUnit}
            selectedUnit={fromUnitSelected}
          />
        </div>
        <div className="dropdown-selector2">
          <div className="units-heading">To Unit:</div>
          <DropdownComponent
            units={units}
            activeUnit={toUnit}
            selectedUnit={toUnitSelected}
          />
        </div>
      </div>
      <div className="unit-converter-answer">{result}</div>
      <div className="d-grid gap-2 submit-button">
        <Button variant="info" onClick={convertUnit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default UnitConverter;
