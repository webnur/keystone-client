import Image from "next/image";
import signInLogo from "../../../../../public/images/logo/sign-in-logo.jpg";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#293a48] p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-8">
          {/* Add your logo here */}
          <Image
            className="max-w-[60%] max-h-[30%]"
            src={signInLogo}
            alt="Keystone StudentHub"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-[22px] text-white font-semibold text-center mb-6">
          Sign in with your email and password
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-pink-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Sign in
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-white text-sm">
            Need an account?{" "}
            <a href="/signup" className="text-pink-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
