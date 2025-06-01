import { Html } from "@react-three/drei"
import { HashLoader } from "react-spinners"

const Loader = () => {
  return (
    <Html>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <HashLoader size={40} color="#afafaf" />
        </div>
    </Html>
  )
}

export default Loader