import '../styles/App.css'

function About() {
  return (
    <div className="App">
      <p>
        Это пет-проект, предназначенный для изучения основ React, поэтому:
      </p>
      <ul style={{listStylePosition:'inside'}}>
        <li>не был сделан упор на стили,</li>
        <li>отсутствуют сторонние UI библиотеки,</li>
        <li>отсутствует state manager и тд.</li>
      </ul>
      <br />
      <p> Все было реализовано при помощи хуков.</p>
    </div>
  );
}

export default About;