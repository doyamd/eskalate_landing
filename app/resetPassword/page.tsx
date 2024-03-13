'use client';
import Image from 'next/image';
import Logo from '@/assets/logo 1.svg'
import Ellipsebottom from '@/assets/Ellipse.svg'
import Ellipsetop from '@/assets/Vector.svg'
// import 'antd/dist/antd.css'; 
import {Button, Input, Form } from 'antd';
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
};

export default function ResetPassword() {
  return (
  <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden'>
        <div className='width-0.5 bg-white h-screen mr-20 md:mr-0'>
          <div className=' flex flex-col justify-center ml-[100px] mr-[100px]  h-full'>
              <h2 className='text-slate-800 text-2xl font-bold '>Forget Password</h2>
              <Form
                className='flex flex-col  mt-2'
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <p className='text-slate-500 text-sm mt-2 mb-2'>E-mail</p>
                <Form.Item<FieldType>
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-full " placeholder='john.doe@a2sv.org' />
                </Form.Item>
                <Form.Item >
                  <Button className='mt-6 bg-blue-700 border-none rounded-full w-full h-[35px] text-white ' htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>       
        
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
