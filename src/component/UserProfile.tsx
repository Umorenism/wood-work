import React, { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";

const UserProfile: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dob, setDob] = useState<string>(""); // Date of Birth state
  const [region, setRegion] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(
    "https://via.placeholder.com/150"
  ); // Placeholder for profile image
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const regions = ["North America", "Europe", "Asia", "Africa", "Australia"]; // Sample regions

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save changes (e.g., API call)
    console.log({ name, email, password, dob, region, image });
    alert("Profile updated successfully!");
  };

  // Handle camera icon click to trigger file input
  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center py-4 text-2xl">Edit</h1>

          {/* Profile Image */}
          <div className="flex justify-center mb-4 relative">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              src={preview}
              alt="Profile Preview"
            />
            <div className="absolute bottom-0 right-24 bg-blue-500 p-2 rounded-full cursor-pointer">
              <FaCamera
                className="text-white w-5 h-5"
                onClick={handleIconClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: "none" }} // Hide file input
              />
            </div>
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Date of Birth Input */}
          <div className="mb-4">
            <label
              htmlFor="dob"
              className="block text-gray-700 font-semibold mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          {/* Region Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="region"
              className="block text-gray-700 font-semibold mb-2"
            >
              Current Region
            </label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              required
            >
              <option value="">Select a region</option>
              {regions.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>

          {/* Save Changes Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
