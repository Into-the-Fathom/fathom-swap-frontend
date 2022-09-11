import React from "react";
import { FathomStack, FathomInput, FathomLabel } from "./StyledFathomToggle";
import { FathomToggleProps, scales } from "./types";

const FathomToggle: React.FC<React.PropsWithChildren<FathomToggleProps>> = ({
  checked,
  scale = scales.LG,
  ...props
}) => (
  <FathomStack scale={scale}>
    <FathomInput id={props.id || "fathom-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <FathomLabel scale={scale} checked={checked} htmlFor={props.id || "fathom-toggle"}>
      <div className="fathoms">
        <div className="fathom" />
        <div className="fathom" />
        <div className="fathom" />
        <div className="butter" />
      </div>
    </FathomLabel>
  </FathomStack>
);

export default FathomToggle;
