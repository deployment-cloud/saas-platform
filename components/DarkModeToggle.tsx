"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme") === "dark";
    setDark(stored);
  }, []);

  // Update html class and persist
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
