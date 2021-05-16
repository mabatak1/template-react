import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Button from 'components/Button';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { GetAuthSelector } from 'redux/selectors/auth';

const LoginPage = (props: any) => {
  // const dispatch = useDispatch();
  const auth = GetAuthSelector();
  const { isLogin } = auth;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  if (isLogin) {
    return <Redirect to="/" />;
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem>Some Action</DropdownItem>
      <DropdownItem text>Dropdown Item Text</DropdownItem>
      <DropdownItem disabled>Action (disabled)</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Foo Action</DropdownItem>
      <DropdownItem>Bar Action</DropdownItem>
      <DropdownItem>Quo Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>

    // <Formik
    //   validateOnBlur={false}
    //   validateOnChange={false}
    //   initialValues={{
    //     username: '',
    //     password: '',
    //   }}
    //   onSubmit={(values) => {
    //     const { username, password } = values;
    //     dispatch(login(username, password));
    //   }}
    // >
    //   {(propsFormik) => (
    //     <Form>
    //       <ErrorFocus />
    //       <div>username: don & password: don</div>
    //       <div>
    //         <label htmlFor="username">UserName</label>
    //         <FastField component={InputField} name="username" />
    //       </div>

    //       <div>
    //         <label htmlFor="password">Password</label>
    //         <FastField component={InputField} name="password" type="password" />
    //       </div>

    //       <Button type="submit">Submit</Button>
    //     </Form>
    //   )}
    // </Formik>
  );
};
export default LoginPage;
