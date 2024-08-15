import { options } from "../../utils/constant";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

function PostFilter({filter, setFilter}) {

  return (
    <div>
      <MyInput
        placeholder='Поиск...'
        value={filter.query}
        onChange={e=>setFilter({...filter, query:e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
        defaultValue={'Сортировка по'}
        options={options}
      />
    </div>
  );
}

export default PostFilter;