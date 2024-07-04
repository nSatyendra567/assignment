import React, { useState } from 'react'

const Form = (props) => {
  const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
      console.log("submit");
        e.preventDefault();
        props.onSubmit(formData);
    };

  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
        <div className=' w-2/4 border-4 border-blue-300 rounded-md pt-5 pb-5'>
            <div className='w-full text-center text-2xl font-bold hover:text-red-400'>
                {props.title}
            </div>
            <div className='flex justify-center'>
            <form onSubmit={handleSubmit}>
                {
                    props.fields.map((field,i)=>(
                        <React.Fragment key={i}>
                          {
                            field.type === 'Select' ? (
                              <select name={field.name} className='w-[30vw] border-b-2 border-green-200 rounded-sm' defaultValue={field.placeholder} key={i} onChange={handleChange} required>
                              <option value={field.placeholder} disabled hidden>Select Role</option>
                                  {field.options.map((option, j) => (
                                    <option key={j} value={option.value}>{option.label}</option>
                                  ))}
                              </select>
                            ) : (
                              <input
                              onBlur={handleChange}
                              name={field.name}
                              onChange={handleChange}
                                type={field.type}
                                placeholder={field.placeholder}
                                className='w-[30vw] border-b-2 border-green-200 rounded-sm'
                                required
                              />
                            )
                          }
                        <br />
                        <br />
                        </React.Fragment>
                    ))
                }
                <input type="submit" value="Add User" className='text-end border-b-2 bg-green-400 p-3 rounded-md'/>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Form