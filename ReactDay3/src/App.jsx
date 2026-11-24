import EmpCard from './empcard.jsx'
import './App.css'

const employees = [
  {
    id: '001',
    name: 'Aarav Sharma',
    position: 'Product Designer',
    department: 'Design',
    email: 'aarav.sharma@example.com',
    image: 'avatar-lilac',
  },
  {
    id: '002',
    name: 'Maya Patel',
    position: 'Frontend Developer',
    department: 'Engineering',
    email: 'maya.patel@example.com',
    image: 'avatar-peach',
  },
  {
    id: '003',
    name: 'Rohan Mehta',
    position: 'Marketing Lead',
    department: 'Marketing',
    email: 'rohan.mehta@example.com',
    image: 'avatar-mint',
  },
]

function App() {
  return (
    <main className="directory">
      <header className="page-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">p.</span>
          <span>people<span className="brand-light">/team</span></span>
        </div>
        <span className="team-count">OUR PEOPLE <span>03</span></span>
      </header>

      <section className="team-section" aria-labelledby="page-title">
        <div className="section-heading">
          <p className="eyebrow">GOOD WORK, GREAT PEOPLE</p>
          <h1 id="page-title">Meet the team<span>.</span></h1>
          <p className="intro">
            A few of the thoughtful people building what comes next.
          </p>
        </div>

        <div className="employee-grid">
          {employees.map((employee) => (
            <EmpCard key={employee.id} {...employee} />
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <span>Small team. Big ideas.</span>
        <span>PEOPLE DIRECTORY <span aria-hidden="true">·</span> 2026</span>
      </footer>
    </main>
  )
}

export default App
