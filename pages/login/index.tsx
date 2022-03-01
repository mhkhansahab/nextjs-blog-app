import type { NextPage } from 'next';
import styles from './../../styles/login.module.css';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useState } from 'react';
import { useRouter } from 'next/router'
import { logIn } from './../../redux/services/user.service';
import { useAppDispatch } from '../../redux/app/hooks';
import Route from '../../components/route';

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

    const [state, setState] = useState({ showLoader: false });
    const dispatch = useAppDispatch()
    const router = useRouter();

    return (
        <Route>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { resetForm }) => {
                    setState({ showLoader: true })
                    dispatch(logIn(values))
                        .then((data: any) => {
                            if (data?.success) {
                                window?.localStorage?.setItem('user', JSON.stringify(data?.user));
                                window?.localStorage?.setItem('token', JSON.stringify(data?.access_token));
                                resetForm({ values: { email: '', password: '' } });
                                router?.push('/');
                            } else {
                                setState({ showLoader: false })
                            }

                        })
                        .catch(() => {
                            setState({ showLoader: false })
                        })
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

                        <button type="submit" className={styles.button}>
                            {!state.showLoader ? 'Login' : <div className={styles.inkLoader}></div>}
                        </button>


                        <div className={styles.text}>No account? <span onClick={() => router?.push('/signup')}>Create one</span></div>

                    </Form>
                )}
            </Formik>
        </Route>
    )
}

export default Login;