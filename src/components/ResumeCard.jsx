import { Card, DescCard } from '../styles/Resume.style'

const ResumeCard = ({ content }) => {
  const {
    from = null,
    to = null,
    icon = null,
    company = null,
    position = null,
    experience = null,
    year = null,
    organization = null,
    for: achivement = null
  } = content
  return (
    <>
      <Card>
        <div className="details">
          <h4 className="timeline">{from && to ? `${from} - ${to}` : year}</h4>
          {position && <p className="job-title">{position}</p>}
          <img src={icon} width="30px" height="30px" />
          <p className="company-name">{company ? company : organization}</p>
        </div>
        <DescCard>
          <ul>
            {experience
              ? experience?.map((item, i) => {
                  return <li key={i}>{item}</li>
                })
              : achivement?.map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
          </ul>
        </DescCard>
      </Card>
    </>
  )
}

export default ResumeCard
