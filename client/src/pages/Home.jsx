import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <h1>Hi, I'm Syed Munazir Ahmed.</h1>
      <p>
        I'm a full-stack developer building web apps with React and Spring Boot.
        This site is my playground for learning and showing the work.
      </p>
      <p>
        <Link to="/projects" className="btn">
          View projects
        </Link>
        <Link to="/about" className="btn secondary">
          About me
        </Link>
      </p>
    </section>
  )
}
