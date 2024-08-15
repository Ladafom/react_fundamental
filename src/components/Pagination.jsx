import MyButton from "./UI/button/MyButton";
import { usePages } from "../hook/usePages";
import '../styles/App.css'

function Pagination({totalPages, activePage, switchPage}) {

  const pagesArray = usePages(totalPages)

  return (
    <div className="pagination">
      {pagesArray.map((page, index)=>
        <div key={page} className={activePage === index+1 ? 'page active':'page'}>
          <MyButton onClick={(e)=>switchPage(page)}>{page}</MyButton>
        </div>
      )}
    </div>
  )
}

export default Pagination;