
import '../App.css';
import { BsPersonCircle, BsFillFileLock2Fill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai'

const Registration = () => {
  return (
    <>
      <h1 className='text-center mt-5'>Registration Form</h1>
      <div className='Reg-form '>

        <form className='regForm'>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"><BsPersonCircle /></span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div className='fullname'>
            <div className="FirstName">
              <label className="form-label">FirstName</label>
              <div className="input-group mb-3  name">


                <span className="input-group-text" id="basic-addon1"> <BsPersonCircle />
                </span>
                <input type="text" className="form-control input-form" placeholder="firstname" aria-label="Username" aria-describedby="basic-addon1" />

              </div>
            </div>
            <div className="LastName">
              <label className="form-label mb-2">LastName</label>

              <div className="input-group mb-3  name">

                <span className="input-group-text" id="basic-addon1"><BsPersonCircle /></span>
                <input type="text" className="form-control input-form" placeholder="lastname" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
          </div>
          <div className='email-section '>
            <div className='Email'>
              <div className="input-group mb-3 email w-20">
                <label className="input-group"> Email address</label>

                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control input-form" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className='Email'>
              <div className="input-group mb-3 email w-20">
                <label className="input-group">Reapeat Email address</label>

                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control input-form" placeholder="Email"
                  aria-label="Email" aria-describedby="basic-addon1" />
              </div>
            </div>
          </div>
          <div className='Password'>
            <div className="input-group mb-3 password">
              <label className="input-group">Password</label>

              <span className="input-group-text" id="basic-addon1"><AiFillLock /></span>
              <input type="password" className="form-control input-form" placeholder="Password"
                aria-label="pawword" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3 password">
              <label className="input-group">Confirm Password</label>

              <span className="input-group-text" id="basic-addon1"><BsFillFileLock2Fill /></span>
              <input type="password" className="form-control input-form" placeholder="Password"
                aria-label="password" aria-describedby="basic-addon1" />
            </div>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" >send me test account setting</label>

          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" >Accept all terms and condition</label>

          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" >Check me out</label>

          </div>
          <button type="submit" className="btn btn-primary"> + Create Account</button>
        </form>
      </div>
    </>

  )
}

export default Registration