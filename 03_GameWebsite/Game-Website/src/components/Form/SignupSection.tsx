import SignupForm from "./SignupForm";
import "../Form/SignupSection.css";

const SignupSection = () => {
  return (
    <section className="signup-section" id="signup">
      <div className="signup-container">
        <h2 className="signup-title">
          SIGN UP FOR <span>GAME NEWS</span>
        </h2>
        <p className="signup-description">
          Sign up today to receive the latest news, updates, and exclusive
          offers for our upcoming releases.
        </p>
        <SignupForm />
        <p className="signup-footer">
          By signing up, you agree to receive promotional emails. You can
          unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default SignupSection;
