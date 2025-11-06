import Card from './components/Card'

//Data 
const jobOpenings = [
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlHa2VbrmPhXEIzDogqy4gR3vWbhKyU1jDw&s",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: 75,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
    companyName: "Google",
    datePosted: "4 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/16/1/microsoft-logo-png_seeklogo-168319.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 88,
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 78,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmn49U8s0si8AOcPjFxKDmNNaL9HJsgNdulA&s",
    companyName: "Spotify",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6tvMO_MkZShhwLzDUbD4yWdVMsS30qR8iw&s",
    companyName: "Adobe",
    datePosted: "7 days ago",
    post: "UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "San Jose, USA"
  }
];


const App = () => {
  return (
    <div className='parent'>

      {jobOpenings.map(function (elem, idx) {

        return (<div key={idx}>
          <Card
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>)

      })}

    </div>
  )
}

export default App

