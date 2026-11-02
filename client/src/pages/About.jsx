const skills = ['React', 'JavaScript', 'Java', 'Spring Boot', 'SQL', 'Git']

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        Write a short paragraph about yourself here: what you're studying or
        working on, what you enjoy building, and what you're looking for next.
      </p>
      <h2>Skills</h2>
      <ul className="about-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
