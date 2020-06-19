import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Checkbox({ id, name, className }) {
  return (
    <>
      <Field
        name={name}
        render={({ field, form }) => {
          return (
            <input
              type="checkbox"
              id={id}
              className={className}
              checked={field.value}
              {...field}
            />
          );
        }}
      />
    </>
  );
}

const EmailForm = () => {
  // const [isSubmitting, setSubmitting] = useState(false);
  return (
    <section class={'signup-section'}>
      <p>{'Sign up and be the first to know when we go live!'}</p>

      <Formik
        initialValues={{ email: '', firstName: '', acceptTerms: false }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.firstName) {
            errors.firstName = 'First Name is required';
          }
          if (!values.acceptTerms) {
            errors.acceptTerms = 'Accept Terms & Conditions is required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors, status, touched }) => (
          <Form id="signup-form">
            <div class="form-fields">
              <Field
                id="name"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <Field id="email" type="email" name="email" placeholder="Email" />
              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </div>
            <p class="terms-section">
              <Checkbox
                id="acceptTerms"
                name="acceptTerms"
                // className={
                //   'form-check-input ' +
                //   (errors.acceptTerms && touched.acceptTerms
                //     ? ' is-invalid'
                //     : '')
                // }
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                I aggree with the{' '}
                <a href="/terms-of-services" target="_blank">
                  Terms & Conditions
                </a>
              </label>
            </p>
            <ErrorMessage
              name="firstName"
              component="div"
              className="failure"
            />
            <ErrorMessage name="email" component="div" className="failure" />
            <ErrorMessage
              name="acceptTerms"
              component="div"
              className="failure"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default EmailForm;
// onSubmit(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   this.setState({
//     message: "You'll be the first to know when we go live!",
//   });
//   setTimeout(() => {
//     this.setState({ message: '' });
//   }, 3000);
// }
// render() {
//   const { message } = this.state;
//   return (
//     <section class={'signup-section'}>
//       <p>{'Sign up and be the first to know when we go live!'}</p>
//       <form
//         id="signup-form"
//         onSubmit={this.onSubmit}
//         method="post"
//         action="#"
//       >
//         <input type="text" name="name" id="name" placeholder="First Name" />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Email Address"
//         />
//         <input type="submit" value="Sign Up" />
//       </form>
//       <p>I aggre with the <a href="/terms-of-services">Terms of Services</a></p>
//       <span className={`${message ? 'visible success' : ''} message`}>
//         {message}
//       </span>
//     </section>
//   );
// }
