'use client';
import Image from 'next/image';
import Logo from '@/assets/logo 1.svg'
import Ellipsebottom from '@/assets/Ellipse.svg'
import Ellipsetop from '@/assets/Vector.svg'
import {Button, Input, Form } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  old?: string;
  new?: string;
  confirm?: string;
};

export default function Reset() {
  return (
  <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden'>
        <div className='width-0.5 bg-white h-screen mr-20 md:mr-0'>
          <div className=' flex flex-col ml-32 md:mr-32 mt-[150px] h-full'>
              <h2 className='text-slate-800 text-2xl font-bold'>Reset Password</h2>
              <div className='flex flex-col justify-start mt-2'>
                   
              <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                
                <p className='text-slate-500 text-sm mt-2'>Old Password</p>
                <Form.Item<FieldType>
                  name="old"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-[300px] md:w-full" />
                </Form.Item>
                
                <p className='text-slate-500 text-sm mt-2'>New Password</p>
                <Form.Item<FieldType>
                  name="new"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-[300px] md:w-full" />
                </Form.Item>

                <p className='text-slate-500 text-sm mt-2'>Confirm Password</p>
                <Form.Item<FieldType>
                  name="confirm"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-[300px] md:w-full" />
                </Form.Item>
  
                

                <Form.Item >
                  <Button className='mt-6 bg-blue-700 border-none rounded-lg w-[300px] md:w-full h-[35px] text-white ' htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              
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
