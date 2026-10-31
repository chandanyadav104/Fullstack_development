import { useEffect, useState} from "react"
import { useLoaderData } from "react-router"

function Github() {

    const data = useLoaderData()

    // const [data, SetData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((response)=> response.json())
    //     .then((data) => {
    //         console.log("data", data)
    //         SetData(data)
            
    //     })

    // }, [])
    
  return (
    <div className="bg-gray-700 text-white text-center m-4 text-3xl p-4">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github profile" width={300} />
    </div>
  )
}

export default Github

// React Router requires this route loader export alongside the component.
// eslint-disable-next-line react-refresh/only-export-components
export const loadGithubInfo = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
