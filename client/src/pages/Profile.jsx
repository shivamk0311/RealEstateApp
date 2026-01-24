import { useSelector } from "react-redux";

export default function Profile() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold mt-7 text-center'>Profile</h1>
      <form className="flex flex-col gap-4">
        <img className='object-cover rounded-full h-24 w-24 mt-5 self-center cursor-pointer' src={currentUser.avatar} alt='profile_img'></img>
        <input type="text" placeholder="Username" id="username" className="bg-white rounded-lg p-3 "></input>
        <input type="text" placeholder="Email" id="email" className="bg-white rounded-lg p-3 "></input>
        <input type="password" placeholder="Password" id="password" className="bg-white rounded-lg p-3 "></input>
        <button className="bg-amber-950 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>

      </div>
    </div>
  )
}
