import React from "react";
import logo from "../assets/logo-slogan.svg";
import { Link, useNavigate} from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch , useSelector} from "react-redux";
import { signInStart,signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = React.useState({});

  const {loading, error : errorMessage} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  {
    /*this is to track changes in the filled so that whenever we type something in the forms will will logged out in the console*/
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  {
    /*this is will handle Submit from the form to use allow the form to be functional you only need to add handleSubmit parametre to onSubmit built in function like the following  onSubmit={handleSubmit}*/
  }
  {
    /*then inside the form do the following */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /*this prevents the default behavior of form submission. In other words, it stops the browser from reloading the page when the form is submitted.*/
    }
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill in all fields"));
    }
    try {
      {
        /* Next it's sends a an HTTP POST request to the /api/auth/signinsignin endpoint that we have created in the backend (the route that we have created). 
      The request includes the form data as a JSON string in the request body. 
      The server will then parse the JSON string and use the data to create a new user in the database.
    */
      }
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        dispatch(signInFailure(data.message));
      }
      {/**/}
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
        {/* left side */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl  text-indigo-950"
          >
            <img src={logo} alt="RentPortal" className="w-96 h-28" />
            {/*<span className="h-10 " color="indigo-900" pill>
              RentPortal
            </span>*/}
            <p className="text-sm mt-5 from-red-600 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">
              This is a demo of a RentPortal Porject. You can sign in with your
              email and password or with Google
            </p>
          </Link>
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div>
              <Label className="text-indigo-900" value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="text-indigo-900" value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button color="gray" type="submit" className="from-red-600 to-blue-800 bg-gradient-to-r text-white" disabled={loading} >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-indigo-900 font-medium">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
