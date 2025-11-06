import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className='w-2/3 flex  rounded-4xl overflow-x-auto flex-nowrap  gap-10  h-full p-6'>
     {props.users.map(function(elem, idx){
      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
     })}
    </div>
  )
}

export default RightContent
