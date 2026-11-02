// functinal component
// const Welcome = () => {
//   return <h1>Hello</h1>
// }
// export default Welcome;

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome To Futura Labs
        </h1>
        <p className="mt-3 text-gray-600">
          Tailwind application
        </p>
        <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  )
}
export default Profile;

// class component
// import { Component } from "react";

// class WelcomeMessage extends Component {
//   render () {
//     return <h1>Hello</h1>
//   }
// }

// export default WelcomeMessage;