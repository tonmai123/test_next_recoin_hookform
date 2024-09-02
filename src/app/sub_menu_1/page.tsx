"use client";

import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Sub Menu1";
  }, []);

  return <div>sub_menu_1</div>;
}
