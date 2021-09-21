import { Formik, Form, ErrorMessage, Field } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { SendMail } from "../../../reduxs/apis/send_mail";

export default function FormEmail({ hanlder }: any) {

    const email: IState = useSelector((state: any) => state.email);
    const dispath = useDispatch();

    const validate = Yup.object().shape({

        subtitle: Yup.string()
            .min(6, "Must be 6 characters or less.")
            .max(100, "Must be 100 characters or less.")
            .required("Please provide a valid subtitle."),

        content: Yup.string()
            .min(6, "Must be 6 characters or less.")
            .max(300, "Must be 300 characters or less.")
            .required("Please provide a valid content.")
    });
    
    return (
        <React.Fragment>
            <div className="meeychat__header">
                <div className="meeychat__header-avatar">
                    <div className="meeychat__header-logo">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div> 
                <div className="meeychat--header__user">
                    <div className="meeychat__header-name">
                        Send email for me
                    </div>
                </div> 
                <div className="meeychat__header-close">
                    <button type="button" onClick={() => hanlder()} className="meeychat__header-button-close">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <Formik 
                initialValues={{
                    subtitle: '',
                    content: ''
                }}

                validationSchema={validate}
                
                onSubmit={values => {

                    const message: IMessage = {
                        Destination: values.subtitle,
                        Subject: values.subtitle,
                        Body: values.content,
                        EmailAddress: "binhhp20@gmail.com",
                        NameObject: "Vu Binh"
                    };

                    dispath(SendMail(message));
                }}>
                {({ errors, touched }) => (
                        <Form className="meeychat__body">
                            <p className="meeychat__address">To email: binhhp20@gmail.com</p>
                            <div className="meeychat__subtitle">
                                <div className="meeychat--subtitle__input">
                                    <Field  name="subtitle"
                                            className={`form-control ${errors.subtitle && touched.subtitle ? 'is-invalid' : ''}`}
                                            autoComplete="off"
                                            placeholder=" "/>
                                    <label className="meeychat--subtitle__label" htmlFor="Subtitle">Subject Line</label>
                                </div>
                                <ErrorMessage className="error" component="div" name="subtitle" />
                            </div>
                            <div className="meeychat__content">
                                <div className="meeychat--subcontent__textarea">
                                    <Field as="textarea"
                                        name="content"
                                        className={`form-control form-text ${errors.content && touched.content ? 'is-invalid' : ''}`} 
                                        placeholder=" " />
                                    <label className="meeychat--subtitle__label" htmlFor="Subtitle">Content</label>
                                </div>
                                <ErrorMessage className="error" component="div" name="content" />
                            </div>
                            <div className="meeychat__footer">
                                {
                                    email.loading
                                    ? <button disabled title="Give us a second..." 
                                                type="submit"
                                                className="send__mail">
                                            <span>Give us a second...</span>
                                        </button>
                                    : <button title="Send mail for me" 
                                            type="submit"
                                            className="send__mail">
                                        <span>Send message</span>
                                     </button>
                                }
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </React.Fragment>
    )
}