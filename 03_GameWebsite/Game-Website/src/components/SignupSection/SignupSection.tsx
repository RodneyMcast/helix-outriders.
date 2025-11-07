import './SignupSection.css'
import SignupForm from './SignupForm'

export default function SignupSection() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <h2>Sign up for updates</h2>
        <p className="sub">Join the Helix Outriders list and be first to know about new missions, updates, and more.</p>
        <SignupForm />
      </div>
    </section>
  )
}
