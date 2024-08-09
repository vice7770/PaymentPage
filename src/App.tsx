import { useEffect, useState } from 'react';
import './App.css';
import usePostPayment from './hooks/usePostPayment';

function App() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [paymentLink, setPaymentLink] = useState('');
  const { error, loading, result, setMakePayment} = usePostPayment({ email, description, firstName, lastName, title });
  async function createPaymentLink() {
    setMakePayment(true);
    setPaymentLink(result?.payment_link);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPaymentLink();
  };
  ///this result snippet was populated with Copilot
  return (
    <div className="container">
      {loading ? (
  <div>...loading</div>
) : (
  <div>
    <h1>Create Payment Link</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Create Payment Link</button>
    </form>
    {error && (
      <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
        {error?.message || 'An error occurred. Please try again.'}
      </div>
    )}
    {paymentLink && (
      <div className="payment-link">
        <h2>Payment Link</h2>
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          {paymentLink}
        </a>
      </div>
    )}
  </div>
)}
    </div>
  );
}

export default App;