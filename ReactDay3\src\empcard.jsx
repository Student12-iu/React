const EmpCard = ({ id, name, position, department, email, image }) => {
  return (
    <article className="employee-card">
      <div className="card-topline">
        <span className="employee-id">TEAM MEMBER / {id}</span>
        <span className="availability"><span aria-hidden="true" /> Available</span>
      </div>

      <div className="employee-profile">
        <div className={`employee-avatar ${image}`} aria-hidden="true">
          {name.split(' ').map((part) => part[0]).join('')}
        </div>
        <div>
          <h2>{name}</h2>
          <p className="employee-position">{position}</p>
        </div>
      </div>

      <div className="department">
        <span className="detail-label">DEPARTMENT</span>
        <span>{department}</span>
      </div>

      <a className="email-link" href={`mailto:${email}`}>
        <span className="mail-icon" aria-hidden="true">↗</span>
        {email}
      </a>
    </article>
  )
}

export default EmpCard