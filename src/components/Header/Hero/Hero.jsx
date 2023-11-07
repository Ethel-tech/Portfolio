import Button from "../../ReusableComponents/ButtonComponent";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero-div">
      <div className="hero-sub-div">
        <p className="name-para">
          <span className="intro">Hi, my name is</span>
          <h3 className="name">Sim-Jaja Boma</h3>
          <h2 className="job">I am a Frontend Engineer</h2>
        </p>
        <Button
          btnText="View Projects"
          style={{ backgroundColor: "#e20a4a", color: "#fff0f5" }}
        />
      </div>
    </section>
  );
}

export default Hero;
