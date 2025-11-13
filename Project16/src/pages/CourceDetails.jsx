import { useParams } from "react-router-dom"


const CourceDetails = () => {

    let courceid = useParams()
  return (
    <div>
      <h1>{courceid.id}</h1>
    </div>
  )
}

export default CourceDetails
