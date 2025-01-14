import { useState, FormEvent } from 'react';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Registration successful!');
      } else {
        setMessage('Registration failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegisterForm;
