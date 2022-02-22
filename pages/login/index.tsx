import type { NextPage } from 'next';
import styles from './../../styles/login.module.css';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useState } from 'react';

interface UserType {
    fullname: string,
    email: string,
    password: string
}
interface UserRoute {
    type: string
}

const signupSchema = yup.object({
    fullname: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z ]+$/, "Name can only contain alphabets")
        .min(4, "Name should be of minimum 4 charachters")
        .max(30, "Name shuld not be exceeded to 30 characters")
        .required("Full Name is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters")
        .required("Password is required"),
});

const loginSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters")
        .required("Password is required"),
});


const Login: NextPage = () => {

    const [route, setRoute] = useState<UserRoute>({ type: 'login' })

    return (
        <>
            {
                route?.type === 'login' ?
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={(values, { resetForm }) => {
                            // same shape as initial values
                            console.log(values);
                            resetForm({ values: { email: '', password: '' } });
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={styles.container}>
                                <Field
                                    name="email"
                                    type="email"
                                    className={styles.input}
                                />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                <Field
                                    name="password"
                                    type="password"
                                    className={styles.input}
                                />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}

                                <button type="submit" className={styles.button}>Login</button>

                                <div className={styles.text}>No account? <span onClick={() => setRoute({ type: 'signup' })}>Create one</span></div>

                            </Form>
                        )}
                    </Formik>

                    :

                    <Formik
                        initialValues={{ fullname: "", email: "", password: "" }}
                        validationSchema={signupSchema}
                        onSubmit={(values, { resetForm }) => {
                            // same shape as initial values
                            console.log(values);
                            resetForm({ values: { fullname: '', email: '', password: '' } });
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className={styles.container}>
                                <Field name="fullname"
                                    className={styles.input}
                                />
                                {errors.fullname && touched.fullname ? (
                                    <div>{errors.fullname}</div>
                                ) : null}

                                <Field
                                    name="email"
                                    type="email"
                                    className={styles.input}
                                />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                <Field
                                    name="password"
                                    type="password"
                                    className={styles.input}
                                />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}

                                <button type="submit" className={styles.button}>Signup</button>


                                <div className={styles.text}>Already have an account? <span onClick={() => setRoute({ type: 'login' })}>Login</span></div>

                            </Form>

                        )}
                    </Formik>
            }

        </>
    )
}

export default Login;