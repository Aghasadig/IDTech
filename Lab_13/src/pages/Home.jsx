import Slider from "../components/Slider";


const datas = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
]

const Home = () => {
  return (
    <div className="container">
      <Slider images={datas}/>
    </div>
  )
}

export default Home
