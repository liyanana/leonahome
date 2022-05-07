import React, { useEffect } from "react";
import { BackwardOutlined, LogoutOutlined } from "@ant-design/icons";
export default function MyComponent() {
  useEffect(() => {
    console.log("component");
  }, []);
  return (
    <div className="my-component">
      <LogoutOutlined />
      <BackwardOutlined />
    </div>
  );
}
