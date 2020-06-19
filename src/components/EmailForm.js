import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import createSubscriber from '../utils/subscriber-create';

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
  const [isSuccessfullySaved, setSuccessfullySaved] = useState(false);
  const [isSaveFailed, setSaveFailed] = useState(false);

  return (
    <section className={'signup-section'}>
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
        onSubmit={async (values, { setSubmitting }) => {
          // Clear preview state
          setSuccessfullySaved(false);
          setSaveFailed(false);
          const subscriber = {
            email: values.email,
            firstName: values.firstName,
            createdAt: new Date().toISOString(),
            origin: 'prelaunch-form',
          };
          try {
            await createSubscriber(subscriber);
            setSuccessfullySaved(true);
          } catch (error) {
            setSaveFailed(true);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, status, touched }) => (
          <Form id="signup-form">
            <div className="form-fields">
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
            <p className="terms-section">
              <Checkbox id="acceptTerms" name="acceptTerms" />
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
      {isSuccessfullySaved && (
        <>
          <p className="success">
            Thanks! You'll recieve an email when the platform goes live!
          </p>
          <p className="success">
            Follow us on your favourite channels to stay updated with the
            project.
          </p>
        </>
      )}
      {isSaveFailed && (
        <p className="failure">
          Something went wrong. Please try again later or contact us.
        </p>
      )}
    </section>
  );
};

export default EmailForm;
