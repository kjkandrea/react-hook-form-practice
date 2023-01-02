export default function IssueSearchForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <label>멋진 text input</label>
        <input type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
