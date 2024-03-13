'use client';
import Image from 'next/image';
import Logo from '@/assets/logo 1.svg'
import Ellipsebottom from '@/assets/Ellipse.svg'
import Ellipsetop from '@/assets/Vector.svg'
import { Divider, Checkbox, Button, Input, Form } from 'antd';
import {Icon} from '@iconify/react'
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  return (
       <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden mx-auto max-w-screen-2xl'>
        <div className=' h-screen w-[60%] mx-auto '>
          <div className=' flex flex-col justify-center items-center h-full'>
          <div className='w-full' >
              <h2 className='text-slate-800 text-2xl font-bold  '>Sign in</h2>
          </div>
              <div className='flex flex-col justify-start w-full'>
                   
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <p className='text-slate-500 text-sm '>E-mail</p>
                <Form.Item<FieldType>
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-full md:w-full" placeholder='john.doe@a2sv.org' />
                </Form.Item>
                <p className='text-slate-500 text-sm mt-2'>Password</p>
                <Form.Item<FieldType>
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-full md:w-full" />
                </Form.Item>
                
                  <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                  <a className='text-blue-700 font-semibold underline ml-[10px]  md:ml-[130px]' href="#">Forgot password?</a>
                </Form.Item>
  
                

                <Form.Item >
                  <Button className='mt-6 bg-blue-700 border-none rounded-full w-full h-[35px] text-white ' htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <div className=' text-slate-500 md:mt-2  hidden md:block'>
                <Divider className="border-t-2 border-slate-500 "   plain><span className="text-slate-500" style = {{ borderColor:'black'}}>OR</span></Divider>
              </div>
              <Button className='mt-6 border-slate-500 rounded-full h-[35px] text-slate-600 m:w-[300px] flex items-center '> <span className='pr-10 pl-10'><Icon className="w-[20px] h-[20px]" icon="flat-color-icons:google"/></span>Continue with Google</Button>
          </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='bg-blue-800 h-screen flex flex-col justify-center items-center relative'>
            <Image className='absolute bottom-0 left-0' src={Ellipsebottom} alt='ellipse' width={300} height={300} />
            <Image src={Logo} alt='Logo' width={300} height={300} />
            <Image className='absolute top-0 right-0' src={Ellipsetop} alt='ellipse' width={300} height={300} />
          </div>
        </div>
        
      </div>

  );
}
