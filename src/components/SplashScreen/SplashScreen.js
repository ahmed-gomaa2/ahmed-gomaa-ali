import "./SplashScreen.css";

const splashTags = ["ReactJS", "Frontend", "Portfolio"];

function SplashScreen() {
  return (
    <section
      className="splash-screen"
      role="status"
      aria-label="Loading Ahmed Gomaa portfolio"
    >
      <div className="splash-screen__glow splash-screen__glow--mint" />
      <div className="splash-screen__glow splash-screen__glow--coral" />

      <div className="splash-screen__card">
        <div className="splash-screen__mark">AG</div>
        <p className="splash-screen__name">Ahmed Gomaa</p>
        <h1 className="splash-screen__title">ReactJS Developer</h1>

        <div className="splash-screen__command" aria-hidden="true">
          <span className="splash-screen__prompt">$</span>
          <span>npm run portfolio</span>
          <span className="splash-screen__cursor" />
        </div>

        <div className="splash-screen__tags">
          {splashTags.map((tag) => (
            <span className="splash-screen__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="splash-screen__progress" aria-hidden="true">
          <span className="splash-screen__progress-bar" />
        </div>
      </div>
    </section>
  );
}

export default SplashScreen;
