import React, { useState } from "react";
import FathomToggle from "./FathomToggle";

export default {
  title: "Components/FathomToggle",
  component: FathomToggle,
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <FathomToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <FathomToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <FathomToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
