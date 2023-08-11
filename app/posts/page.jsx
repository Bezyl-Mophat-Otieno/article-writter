
import  {client} from "../lib/contentful/client"
// const asynchronous function to fetch data in a server component
const fetchData = async ()=>{
  const res = await client.getEntries({content_type:"post"})
  return res.items
  
}


const imageLoader = ({src , width , quality })=>{

  return `https://cdn.pixabay.com/${src}?w=${width}&q=${quality}`

}

const src = 'photo/2023/05/01/14/26/bee-7963186_640.jpg'
const width = 200
const quality = 400

const url = imageLoader({src, width, quality})

console.log(url)
export default async function page() {
  const posts = await fetchData()
  let profilePic ;
  posts.map((post , index) => {
    console.log(`post ${index}`)
    console.log(post.fields)
    
  });
  return (
    <div>Testing out the serverside data fetching </div>
  )
}

