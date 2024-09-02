"use client";

import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Sub Menu2";
  }, []);

  return <div>sub_menu_2</div>;
}
