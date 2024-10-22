import Blog from "./Component/Blog/Blog"

import BookMark from "./Component/BookMark/BookMark"
import Header from "./Component/Header/Header"

function App() {
  

  return (
    <>
    <Header></Header>
    <div className="md:flex container mx-auto mt-5">
    <Blog></Blog>

    <BookMark></BookMark>
    </div>
    </>
  )
}

export default App
