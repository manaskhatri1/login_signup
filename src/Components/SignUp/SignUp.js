import { Form, Input, Button } from "antd";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const SignUpForm = (
    <Form
      name="form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <p className="form-title">Sign up</p>
      <p>Register to the Dashboard</p>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="employeeId"
        rules={[{ required: true, message: "Please input your employee id!" }]}
      >
        <Input placeholder="Employee Id" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="confirmPassword" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="form-button">
          SIGN UP
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <div className="page">
      <div className="box">
        <div className="illustration-wrapper">
          <img
            src="https://c8.alamy.com/comp/2DDH22R/sign-in-page-abstract-concept-vector-illustration-2DDH22R.jpg"
            alt="Login"
          />
        </div>
        {SignUpForm}
      </div>
    </div>
  );
};

export default SignUp;
