import React from "react";
import logo from "../assets/logo-slogan.svg";
import { Link, useNavigate} from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

export default function SignUp() {
  const [formData, setFormData] = React.useState({});

  const [errorMessage, setErrorMessage] = React.useState(null); // this is to track the error message that will be returned from the server if the user already exists in the database
  const [loading, setLoading] = React.useState(false); // this is to track the loading state of the form
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
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill in all fields");
    }
    try {
      {
        /* Next it's sends a an HTTP POST request to the /api/auth/signup endpoint that we have created in the backend (the route that we have created). 
      The request includes the form data as a JSON string in the request body. 
      The server will then parse the JSON string and use the data to create a new user in the database.
    */
      }
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      {/**/}
      if(res.ok){
        navigate("/sign-in");
      }
    } catch (error) {}
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
              This is a demo of a RentPortal Porject. You can sign up with your
              email and password or with Google
            </p>
          </Link>
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label className="text-indigo-900" value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
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
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-indigo-900 font-medium">
              Sign In
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
