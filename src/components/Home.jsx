import { Link } from "react-router-dom"
import "./home.css"
function Home() {
  return (
    <section className="sectionHome">
      <h1>Quesos La finca</h1>
      <p>Descubre Nuestros Quesos Gourmet y demas productos</p>
    <button className="btn" ><Link to="/productos" className="btn">Explora nuestra collecion</Link></button>
  </section>
  )
}

export default Home
