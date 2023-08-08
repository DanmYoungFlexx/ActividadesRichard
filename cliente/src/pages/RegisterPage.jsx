
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/tasks');
  }, [isAuthenticated, navigate]);

  const onSubmited = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        RegisterErrors.map((error, i) => (
          <div className='bg-red-500 text-white p-2' key={i}>
            {error}
          </div>
        ))
      }
      
      <form onSubmit={onSubmited}>
        <input type="text" {...register("username", {required:true})} placeholder='Username' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

        {
          errors.username && <div className='bg-red-500 text-white p-2'>Username is required</div>
        }

        <input type="email" {...register("email", {required:true})} placeholder='Email' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
        
        {
          errors.email && <div className='bg-red-500 text-white p-2'>Email is required</div>
        }

        <input type="password" {...register("password", {required:true})} placeholder='Password' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

        {
          errors.password && <div className='bg-red-500 text-white p-2'>Password is required</div>
        }

        <button type="submit" className="bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage