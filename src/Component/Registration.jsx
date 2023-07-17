
import '../css/Registration.css';
import { BsPersonCircle, BsFillFileLock2Fill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai'
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
// import {ControlPointIcon} from '@mui/icons-material/ControlPoint';

const Registration = () => {
  return (
    <>
      <h1 className='text-center mt-5'>Create  Account</h1>


      <div className='Reg-form '>

        <form className='regForm'>

          <div className="input-group mb-3 username">
            <span className="input-group-text" ><BsPersonCircle /></span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div className='fullname  input-group  mb-3'>
            <div className=" Email">
              <div className="input-group mb-3 name ">
                <label className="form-label input-group input-group-lg  label-name">FirstName</label>
                <div className="input-group   first-name">

                  <span className="input-group-text" > <BsPersonCircle />
                  </span>
                  <input type="text" className="form-control input-form " placeholder="Firstname" aria-label="Username" aria-describedby="basic-addon1" required/>
                </div>
              </div>
            </div>
            <div className=" Email">
              <div className="input-group mb-3 name ">
                <label className="form-label  input-group   ">LastName</label>

                <div className="input-group  last-name">

                  <span className="input-group-text " ><BsPersonCircle /></span>
                  <input type="text" className="form-control input-form " placeholder="Lastname" aria-label="Username" aria-describedby="basic-addon1" required />
                </div>
              </div>
            </div>
          </div>
          <div className='email-section '>
            <div className='Email'>
              <div className="input-group mb-3 email w-20">
                <label className="input-group  form-label"> Email address</label>

                <span className="input-group-text" >@</span>
                <input type="email" className="form-control input-form" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required/>
              </div>
            </div>
            <div className='Email'>
              <div className="input-group mb-3 email w-20">
                <label className="input-group  form-label label-name">Repeat Email address</label>

                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control input-form" placeholder="Email"
                  aria-label="Email" aria-describedby="basic-addon1" required/>
              </div>
            </div>
          </div>
          <div className='Password'>
            <div className="input-group mb-3 password">
              <label className="input-group label-name">Password</label>

              <span className="input-group-text" id="basic-addon1"><AiFillLock /></span>
              <input type="password" className="form-control input-form" placeholder="Password"
                aria-label="pawword" aria-describedby="basic-addon1" required />
            </div>

            <div className="input-group mb-3 password">
              <label className="input-group label-name">Confirm Password</label>

              <span className="input-group-text" ><BsFillFileLock2Fill /></span>
              <input type="password" className="form-control input-form" placeholder="Password"
                aria-label="password" aria-describedby="basic-addon1"  required/>
            </div>
          </div>

          <div className="mb-3 form-check">
            <FormControlLabel required control={<Checkbox />} label="send me test account setting" />

          </div>
          <div className="mb-3 form-check">
            <FormControlLabel required control={<Checkbox />} label="Accept all terms and condition" />
          </div>
          <div className="mb-3 form-check">
            <FormControlLabel required control={<Checkbox />} label="Check me out" />


          </div>
          <button type="submit" className="btn btn-primary button"
            onClick={() =>
              alert("Registration Succesfully")}>  Create Account</button>
        </form>
      </div>
    </>

  )
}

export default Registration