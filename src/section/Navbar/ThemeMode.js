import React, { useState, useEffect } from "react";
import useMode from "use-dark-mode";
import { Moon, Sun } from "../../component/Icons";
export default function ThemeMode() {
  const [darkMode, setDarkMode] = useState(false);
  const { value, toggle } = useMode(false);

  function fetch() {
    if (value) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  useEffect(() => {
    fetch();
  }, [value]);

  return (
    <div className="thememode" onClick={() => toggle()}>
      {darkMode ? (
        <Sun width={18} height={20} />
      ) : (
        <Moon width={18} height={20} />
      )}

      <style jsx>{`
        .thememode {
          margin-right: 0.6rem;
          color: #3339;
        }

        .thememode:hover {
          color: #333;
          transition: all 250ms;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
