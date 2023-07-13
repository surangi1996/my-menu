import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/image 2.png';
import logoImg from '../assets/image 1.png';
import google from '../assets/Google.svg';
import apple from '../assets/Apple.svg';
import { Checkbox, Divider, Input } from 'antd';
import '../styles/SignUp.css'

export default function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const navigate = useNavigate();
    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <div className="logoImg">
                        <img src={logoImg} alt="" />
                    </div>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-input">

                            <h2 className="form-input-margin" >Create Your Account</h2>
                            <h5 className="form-input-margin" >Name</h5>
                            <Input className="form-input-margin" type="text" {...register("username")} placeholder='username' />
                            <h5 className="form-input-margin" >Email</h5>
                            <Input className="form-input-margin" type="text" {...register("email", { required: true })} placeholder='email' />
                            {errors.email?.type === "required" && "Mobile Number is required"}
                            <h5 className="form-input-margin" >Password</h5>
                            <Input className="form-input-margin" type="text" {...register("password")} placeholder='password' />
                            <h5 className="form-input-margin">Confirm Password</h5>
                            <Input className="form-input-margin" type="text" {...register("confirmpwd")} placeholder='confirm password' />
                        </div>


                    </form>
                    <div className="form-footer">
                        <Checkbox className="form-footer-margin" >
                            I agree to all terms, privacy and policy
                        </Checkbox>

                        <button className='btn signup form-footer-margin' onClick={() => navigate('/')}>Sign Up</button>

                        <h5>Already have an account <a href="/">Sign In</a></h5>
                        <Divider className="form-footer-margin" plain>Or</Divider>
                        <button className='btn google form-footer-margin'><img src={google} alt="" style={{ marginRight: 5, height: 12 }} />Sign Up With Google</button>
                        <button className='btn apple form-footer-margin'><img src={apple} alt="" style={{ marginRight: 5, height: 15 }} />Sign Up With Apple</button>
                    </div>

                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
}