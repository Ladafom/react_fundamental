  function MySelect({options, defaultValue, value, onChange}) {
  return (
    <select name="" id=""
      value={value}
      onChange={e=>onChange(e.target.value)}
    >
        <option value="" disabled>{defaultValue}</option>
        {options.map(option =>
          <option value={option.value} key={option.value}>{option.name}</option>
        )}
      </select>
  );
}

export default MySelect;