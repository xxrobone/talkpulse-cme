
const AddComment = () => {
  return (
    <form>
      <h3>Add a Comment</h3>
      <label htmlFor='username'>Name:</label>
      <input type='text' id='username' name='username' />
      <label htmlFor='comment'>Comment:</label>
      <textarea id='comment' name='comment'></textarea>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default AddComment;
