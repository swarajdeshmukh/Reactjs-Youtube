import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Herosection = (props) => {
  return (
    <div className="h-[90%] px-10 py-15 flex items-center justify-between gap-10">
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Herosection
