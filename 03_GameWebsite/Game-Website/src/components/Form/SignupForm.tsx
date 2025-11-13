import "../Form/SignupSection.css";

const SignupForm = () => {
  return (
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select id="country" required>
          <option value="">Select your country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="mt">Malta</option>
          <option value="de">Germany</option>
        </select>
      </div>

      <button type="submit" className="signup-btn">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;