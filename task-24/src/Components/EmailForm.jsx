import React, { useId } from 'react';

function EmailForm() {
  const id = useId();

  return (
    <form>
      <label>Email:</label>
      <input type="email" />
      <label>Subject:</label>
      <input type="text" />
    </form>
  );
}

export default EmailForm;
