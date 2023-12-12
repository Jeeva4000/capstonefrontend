// // import React, { useState } from 'react';
// // import Base from '../Base/Base.js';
// // import { useNavigate } from 'react-router-dom';

// // const SignupPage = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false); // Added loading state
// //   const navigate = useNavigate();

// //   const handleSignup = async () => {
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match');
// //       return;
// //     }

// //     const userDetail = {
// //       email,
// //       password,
// //       confirmPassword,
// //     };

// //     setLoading(true);

// //     try {
// //       const response = await fetch('https://capstonebackend-47kj.onrender.com/user/signup', {
// //         method: 'POST',
// //         body: JSON.stringify(userDetail),
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       const data = await response.json();

// //       if (data.token) {
// //         setError('');
// //         localStorage.setItem('token', data.token);
// //         // Use await to ensure navigation after successful response
// //         await navigate('/login');
// //       } else {
// //         setError(data.message);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       setError('An unexpected error occurred. Please try again later.');
// //     } finally {
// //       setLoading(false); // Reset loading state
// //     }
// //   };

// //   return (
// //     <Base>
// //       <div className="main">
// //         <div className="signup-form">
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Confirm Password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //           />
// //           <button onClick={handleSignup} disabled={loading}>
// //             {loading ? 'Signing up...' : 'Sign Up'}
// //           </button>
// //           {error && <p className="error-message">{error}</p>}
// //         </div>
// //       </div>
// //     </Base>
// //   );
// // };

// // export default SignupPage;




// import React, { useState } from 'react';
// import Base from '../Base/Base.js';
// import { Link, useNavigate } from 'react-router-dom';

// const SignupPage = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async () => {

//     const userDetail = {
//       email,
//       password,
//       confirmPassword,
//     };
//     console.log(userDetail)

//     try {

//       const response = await fetch('https://capstonebackend-47kj.onrender.com/user/signup', {
//         method: 'POST',
//         body: JSON.stringify(userDetail),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();
//       console.log(data)

//       if (data.token) {
//         setError('');
//         localStorage.setItem('token', data.token);
//         // navigate('/login');
//         window.location.href = "/login";
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error(error)
//       setError('An unexpected error occurred. Please try again later.');
//     }
//   };

//   return (
//     <Base>
//       <div className="main">
//         <div className="signup-form">
//           <p className='sign'>SIGNUP</p>

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <button onClick={handleSignup}>Sign Up</button>
//           {error && <p className="error-message">{error}</p>}

//           <div className='log'>
//             <span>Do you have an account? </span>
//             <Link to="/login">Login</Link>
//           </div>
//         </div>
//       </div>
//     </Base>
//   );
// };

// export default SignupPage;



import React, { useState } from 'react';
import Base from '../Base/Base.js';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const userDetail = {
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await fetch('https://capstonebackend-47kj.onrender.com/user/signup', {
        method: 'POST',
        body: JSON.stringify(userDetail),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.token) {
        // Signup successful
        localStorage.setItem('token', data.token);
        navigate('/login');
        toast.success('Signup successful! Please log in.');
      } else if (data.error === 'Email already exists') {
        // Email already exists
        toast.error('Email already exists. Please use a different email.');
      } else {
        // Other error
        toast.error('An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <Base>
      <div className="main">
        <div className="signup-form">
          <p className='sign'>SIGNUP</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Sign Up</button>

          <div className='log'>
            <span>Do you have an account? </span>
            <Link to="/login">Login</Link>
          </div>

          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
      </div>
    </Base>
  );
};

export default SignupPage;

