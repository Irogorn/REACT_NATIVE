//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import Input from "../../ui/Input/Input";
import Error from "../../ui/Error/Error";
import Button from "../../ui/Bouton/Button";

const loginScchema = yup.object({
    email: yup
        .string("Email must be a string")
        .email("Email format incorrect")
        .required("Email must be not empty"),
    password: yup
        .string("password must be a string")
        .required("password must be not empty")
        .min(6, "password is too short (6 characters minimum)")
        .test("isPassWordTooLong", "Password is too long", (val) => {
            if (val) {
                return val.length < 20;
            } else {
                return false;
            }
        }),
});

// create a component
const LoginFormik = () => {
    function connect(values) {
        console.log(values);
    }
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginScchema}
                onSubmit={(values) => {
                    connect(values);
                }}
            >
                {(formikProps) => (
                    <>
                        <Input
                            placeholder="Courriel"
                            handle={formikProps.handleChange("email")}
                            value={formikProps.values.email}
                            onBlur={formikProps.handleBlur("email")}
                        />
                        {formikProps.touched.email && (
                            <Error error={formikProps.errors.email} />
                        )}
                        <Input
                            placeholder="Mot de passe"
                            handle={formikProps.handleChange("password")}
                            value={formikProps.values.password}
                            onBlur={formikProps.handleBlur("password")}
                        />
                        {formikProps.touched.password && (
                            <Error error={formikProps.errors.password} />
                        )}
                        <Button
                            label="Sign In"
                            handle={formikProps.handleSubmit}
                        />
                    </>
                )}
            </Formik>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default LoginFormik;
