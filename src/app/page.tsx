'use client'

export default function Home() {
  function handleClick(){
    console.log('clicked');
  }
  return (
    <main>
      <h1 className="text-center">Welcome to Plums!</h1>
      <h1>Chris Leavitt</h1>
      <button onClick={() => handleClick()}>Click Me!</button>
    </main>
  )
}
    