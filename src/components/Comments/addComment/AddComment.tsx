
const AddComment = () => {
  return (
    <form>
      <h3>Add a Comment</h3>
      <label htmlFor='username'>Name:</label>
      <input type='text' id='username' name='username' />
      <label htmlFor='body'>Comment:</label>
      <textarea id='body' name='body'></textarea>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default AddComment;
