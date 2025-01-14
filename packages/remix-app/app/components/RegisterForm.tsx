import { Form, useActionData } from '@remix-run/react';

interface ActionData {
  success?: boolean;
  error?: string;
}

const RegisterForm: React.FC = () => {
  const actionData = useActionData<ActionData>();

  return (
    <div>
      <Form method="post" action="https://your-api-endpoint.com/register">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Register</button>
      </Form>
      {actionData?.success && <p>Registration successful!</p>}
      {actionData?.error && <p>{actionData.error}</p>}
    </div>
  );
};

export default RegisterForm;
