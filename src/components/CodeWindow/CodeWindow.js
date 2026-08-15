import { useEffect, useState } from "react";
import "./CodeWindow.css";

const DEVELOPER_CODE = `const developer = {
  name: "Ahmed Gomaa",
  focus: "ReactJS",
  skills: [
    "UI", "State", "APIs"
  ],
  available: true
};

// Let's build something useful.`;

const TYPING_SPEED = 28;
const RESTART_DELAY = 1800;

function userPrefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function CodeWindow() {
  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    if (userPrefersReducedMotion()) {
      setTypedCode(DEVELOPER_CODE);
      return undefined;
    }

    let nextCharacterIndex = 0;
    let timerId;

    function typeNextCharacter() {
      setTypedCode(DEVELOPER_CODE.slice(0, nextCharacterIndex));
      nextCharacterIndex += 1;

      if (nextCharacterIndex <= DEVELOPER_CODE.length) {
        timerId = window.setTimeout(typeNextCharacter, TYPING_SPEED);
        return;
      }

      timerId = window.setTimeout(() => {
        nextCharacterIndex = 0;
        setTypedCode("");
        typeNextCharacter();
      }, RESTART_DELAY);
    }

    typeNextCharacter();

    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <div className="code-window">
      <div className="code-window__bar">
        <div className="code-window__dots">
          <span className="code-window__dot code-window__dot--coral" />
          <span className="code-window__dot code-window__dot--gold" />
          <span className="code-window__dot code-window__dot--mint" />
        </div>
        <p className="code-window__filename">developer.jsx</p>
        <span className="code-window__spacer" />
      </div>

      <div className="code-window__content" aria-hidden="true">
        <pre className="code-window__code">
          <code>{typedCode}</code>
          <span className="code-window__cursor" />
        </pre>
      </div>

      <div className="code-window__footer">
        <span>Ln 9, Col 34</span>
        <span>JavaScript React</span>
      </div>
    </div>
  );
}

export default CodeWindow;
