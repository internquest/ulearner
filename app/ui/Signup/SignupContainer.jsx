/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Image from 'next/image';
import cross from '@/app/assets/cross.svg';
import tick from '@/app/assets/tick.svg';
import warning from '@/app/assets/warning.svg';
const SignupContainer = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    const validate = (values) => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = 'First Name is required';
        }

        if (!values.lastName) {
            errors.lastName = 'Last Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(values.password)) {
            errors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[a-z]/.test(values.password)) {
            errors.password = 'Password must contain at least one lowercase letter';
        } else if (!/[0-9]/.test(values.password)) {
            errors.password = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*]/.test(values.password)) {
            errors.password = 'Password must contain at least one special character';
        }

        return errors;
    };
    return (
        <div>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched, isValid }) => (
                    <Form className="max-w-md mx-auto">
                        {/* First Name Input */}
                        <div className="mb-6 sm:flex sm:justify-between">
                            <div className="mb-6 sm:mb-0 sm:mr-3 sm:w-1/2">
                                <label htmlFor="firstName" className="block text-sm font-semibold text-[#0e0e0e]">
                                    First Name
                                </label>
                                <Field
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className={`mt-1 block w-full h-12 px-4 py-1 border ${errors.firstName && touched.firstName ? 'border-error border-2' : 'border-gray-300'} sm:text-sm rounded active:border-[#0e0e0e]`}
                                />
                                {touched.firstName && errors.firstName &&
                                    <div className="flex items-center w-full mt-3">
                                        <Image src={warning} alt="warning" width={20} height={10} className="mr-1 bg-error rounded-full" />
                                        <span className="text-error text-xs lg:text-sm">{errors.firstName}</span>
                                    </div>
                                }
                            </div>

                            {/* Last Name Input */}
                            <div className="sm:ml-3 sm:w-1/2">
                                <label htmlFor="lastName" className="block text-sm font-semibold text-[#0e0e0e]">
                                    Last Name
                                </label>
                                <Field
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className={`mt-1 block w-full h-12 px-4 py-1 border ${errors.lastName && touched.lastName ? 'border-error border-2' : 'border-gray-300'} sm:text-sm rounded active:border-[#0e0e0e]`}
                                />
                                {touched.lastName && errors.lastName &&
                                    <div className="flex items-center w-full mt-3">
                                        <Image src={warning} alt="warning" width={20} height={10} className="mr-1 bg-error rounded-full" />
                                        <span className="text-error text-xs lg:text-sm">{errors.lastName}</span>
                                    </div>
                                }
                            </div>
                        </div>

                        {/* Email Address Input */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-semibold text-[#0e0e0e]">
                                Email Address
                            </label>
                            <Field
                                type="text"
                                name="email"
                                id="email"
                                className={`mt-1 block w-full h-12 px-4 py-1 border ${errors.email && touched.email ? 'border-error border-2' : 'border-gray-300'} sm:text-sm rounded active:border-[#0e0e0e]`}
                            />
                            {/* <ErrorMessage name="email" component="div" className="text-error text-sm mt-[.15em]" /> */}
                            {touched.email && errors.email &&
                                <div className="flex items-center w-full mt-3">
                                    <Image src={warning} alt="warning" width={20} height={10} className="mr-1 bg-error rounded-full" />
                                    <span className="text-error text-xs lg:text-sm">{errors.email}</span>
                                </div>
                            }
                        </div>

                        {/* Password Input */}
                        <div className="mb-6 relative">
                            <label htmlFor="password" className="block text-sm font-semibold text-[#0e0e0e]">
                                Password
                            </label>
                            <Field
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                className={`mt-1 block w-full h-12 px-4 py-1 border ${errors.password && touched.password ? 'border-error border-2' : 'border-gray-300'} sm:text-sm rounded active:border-[#0e0e0e]`}
                            />
                            {/* Toggle Password Visibility Button */}
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-[34px] right-4"
                            >
                                <img
                                    src={showPassword ? "https://images.jumpstart.me/frontend/icons/password-visible--messenger.svg" : "https://images.jumpstart.me/frontend/icons/password-invisible.svg"}
                                    alt={showPassword ? 'Hide Password' : 'Show Password'}
                                    className="h-6 w-6"
                                />
                            </button>
                            {touched.password && (
                                <div className="mt-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center py-1">
                                            <Image
                                                src={errors.password ? cross : tick}
                                                alt=""
                                                width={14}
                                                height={14}
                                                className="mr-2"
                                            />
                                            <span className='text-base font-normal leading-[130%] flex text-[#666]'>One uppercase character (A-Z)</span>
                                        </div>
                                        <div className="flex items-center py-1">
                                            <Image
                                                src={errors.password ? cross : tick}
                                                alt=""
                                                width={14}
                                                height={14}
                                                className="mr-2"
                                            />
                                            <span className='text-base font-normal leading-[130%] flex text-[#666]'>One lowercase character (a-z)</span>
                                        </div>
                                        <div className="flex items-center py-1">
                                            <Image
                                                src={errors.password ? cross : tick}
                                                alt=""
                                                width={14}
                                                height={14}
                                                className="mr-2"
                                            />
                                            <span className='text-base font-normal leading-[130%] flex text-[#666]'>One number (0-9)</span>
                                        </div>
                                        <div className="flex items-center py-1">
                                            <Image
                                                src={errors.password ? cross : tick}
                                                alt=""
                                                width={14}
                                                height={14}
                                                className="mr-2"
                                            />
                                            <span className='text-base font-normal leading-[130%] flex text-[#666]'>One symbol (e.g. $, !, #, &)</span>
                                        </div>
                                        <div className="flex items-center py-1">
                                            <Image
                                                src={errors.password ? cross : tick}
                                                alt=""
                                                width={14}
                                                height={14}
                                                className="mr-2"
                                            />
                                            <span className='text-base font-normal leading-[130%] flex text-[#666]'>More than 8 characters</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="my-6 flex justify-center">
                            <button
                                type="submit"
                                disabled={!Object.keys(errors).length === 0 || !Object.keys(touched).length === 4}
                                className={`w-full px-4 py-2 rounded-md text-sm font-semibold ${Object.keys(errors).length === 0 && Object.keys(touched).length === 4
                                    ? 'bg-lime text-[#0e0e0e]'
                                    : 'bg-[#fafafa] text-[#dadada] cursor-not-allowed'
                                    } focus:ring-opacity-50 transition-colors duration-300`}
                            >
                                {isSubmitting ? 'Signing up...' : 'Sign up'}
                            </button>
                        </div>

                        <div className="border-b pb-6 text-[#666] text-sm font-normal leading-[150%]">
                            By clicking “Sign up” or “Sign up with Google,” you’re agreeing to Untapped’s{' '}
                            <a className="underline" href="#">
                                Terms of Use
                            </a>
                            .
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignupContainer
