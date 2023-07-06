import React from 'react'

export default function Home(data,done) {
  console.log('data => ', data )
  console.log('done =>', done)
  const result = Object.values(data);

  console.log(result);
  return (
    <div>
      <main>

</main>
      <h1>Users</h1>
    {data.data.map((element)=><div key={element.name}>
      <div>
        
        <h2>{element.name}</h2>
        <h3>{element.email}</h3>
        <h3>{element.created_at}</h3>
        </div>
    </div>)} 
    </div>
    
    
  )
}

export async function getStaticProps(){

  const response = await fetch("http://127.0.0.1:8000/api/users")
  const data = await response.json()
  return{
    props:{
      data:data,
      done:true,
    }
  }

}