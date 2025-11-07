import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Helix Outriders. All rights reserved.</p>
        <p className="sub">All trademarks are property of their respective owners.</p>
      </div>
    </footer>
  )
}
