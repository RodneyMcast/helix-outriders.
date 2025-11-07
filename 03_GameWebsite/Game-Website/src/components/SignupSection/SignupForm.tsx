import './SignupSection.css'
import { useState } from 'react'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Signed up:\nEmail: ${email}\nCountry: ${country}`)
    setEmail('')
    setCountry('')
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select your country</option>
        <option value="Malta">Malta</option>
        <option value="UK">United Kingdom</option>
        <option value="Italy">Italy</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  )
}
