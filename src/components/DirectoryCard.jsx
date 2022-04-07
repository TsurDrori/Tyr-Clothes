import { Link } from "react-router-dom"

export default function DirectoryCard({ title, imageUrl}) {
  return (
    <div className="directory-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`, }}>
      </div>
      <Link to={`shop/${title}`} className="directory-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </Link>
    </div>
  )
}