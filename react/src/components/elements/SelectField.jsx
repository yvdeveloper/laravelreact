export default function SelectField({name, title, _options}) {

    return (
      <>
        <select name="status" id="i-status" data-te-select-init>
          {_options.map((n, index) => (
            <option key={index} value={index}>{n}</option>
          ))}
        </select>
        <label data-te-select-label-ref>{title}</label>
      </>
    )
}
