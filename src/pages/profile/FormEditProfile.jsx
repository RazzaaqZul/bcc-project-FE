import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../api/AuthContext";
import axios from "../../api/axios";
import { ProductContext } from "../../api/dummy";
import { defaultProfil, eyeClose, eyeOpen } from "../../assets";
import styles from "../../style";

const FormEditProfile = ({ onHere }) => {
  const { setAuth, auth } = useContext(AuthContext);
  const context = useContext(ProductContext);

  const [fname, setFname] = useState(auth.fname);
  const [email, setEmail] = useState(auth.email);
  const [username, setUsername] = useState(auth.username);
  const [gender, setGender] = useState(auth.gender);
  const [password, setPassword] = useState(auth.password);
  const [address, setAddress] = useState(auth.address);
  const [contact, setContact] = useState(auth.contact);
  const [firstImage, setFirstImage] = useState();
  const [user_image, setUser_image] = useState(auth.user_image);

  // const [isGender, setIsGender] = useState(false)
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [priview, setPreview] = useState();
  const passRef = useRef();
  const [errMessage, setErrMessage] = useState("");
  const [isErr, setIsErr] = useState(false);

  const isGender = ["female", "male"];
  const [selected, setSelected] = useState(isGender[0]);

  // useEffect(()=>{
  //     console.log(firstImage)
  //     if(!firstImage){
  //         setPreview(undefined)
  //         return
  //     }

  //     const objectUrl = URL.createObjectURL(firstImage)
  //     setPreview(objectUrl)
  //     console.log(priview)

  //     return () => URL.revokeObjectURL(objectUrl)

  // },[firstImage])

  useEffect(() => {
    passRef.current.focus();
    console.log(password);
    console.log(contact);
  }, [onHere]);

  //  setGender Selected
  useEffect(() => {
    if (gender === "female") {
      setSelected(isGender[0]);
    } else if (gender === "male") {
      setSelected(isGender[1]);
    }
    console.log(selected);
  }, []);

  console.log(auth);

  // HandleSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("Authorization");

      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const data = {
        fname,
        email,
        username,
        gender: selected,
        password,
        address,
        contact,
        user_image,
      };
      console.log(data);

      const response = await axios.put(
        "/api/v1/user/update",
        {
          fname,
          email,
          username,
          gender: selected,
          password,
          address,
          contact,
          user_image,
        },
        config
      );
      console.log(response);

      setAuth({
        fname,
        email,
        username,
        gender: selected,
        password,
        address,
        contact,
      });

      console.log(auth);

      setSuccess(true);
    } catch (err) {
      setErrMessage(err.message);
      setIsErr(true);
      console.log(err);
    }
  };

  const [type, setType] = useState("password");

  const hidePassword = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const eyes = () => {
    if (type === "password") {
      return <img src={eyeClose} alt="eyes-close" />;
    } else {
      return <img src={eyeOpen} alt="eyes-open" />;
    }
  };

  return (
    <>
      {isErr && (
        <>
          <div className="bg-red-500">{errMessage}</div>
        </>
      )}

      {success ? (
        <Navigate to="/product-list"></Navigate>
      ) : (
        <>
          <div className="font-mulish">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row justify-end py-4">
                <button className="bg-gradient-green hover:scale-110 duration-300 text-white p-3 rounded-3xl ">
                  Simpan
                </button>
              </div>
              {/* fname */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <label
                  className="basis-[30%] text-[15px] font-bold"
                  htmlFor="fname"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  autoComplete="off"
                  onChange={(e) => setFname(e.target.value)}
                  value={fname}
                  required
                  className={`${styles.input} flex justify-end items-end basis-[60%] `}
                />
              </div>

              {/* foto anda */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <div className="basis-[30%]">
                  <h1 className="text-[15px] font-bold">Foto Anda</h1>
                  <p className="text-[10px] text-neutral70 font-extrabold">
                    Ini akan ditampilkan di foto profil anda
                  </p>
                </div>
                <label className="flex flex-row justify-center items-center basis-[70%] gap-5">
                  {/* <img src={!priview ? defaultProfil : priview} alt='user_image' className='w-[90px] h-[90px] rounded-full '></img>     */}
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-gradient-green file:text-white
                        hover:file:bg-green60
                        "
                    name="user_image"
                    onChange={(e) => {
                      setUser_image(e.target.files[0]);
                    }}
                  />
                </label>
              </div>

              {/* email */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <label
                  className="basis-[30%] text-[15px] font-bold"
                  htmlFor="email"
                >
                  email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className={`${styles.input} flex justify-end items-end basis-[60%] `}
                />
              </div>

              {/* username */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <label
                  className="basis-[30%] text-[15px] font-bold"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                  className={`${styles.input} flex justify-end items-end basis-[60%] `}
                />
              </div>
              {/* Gender */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <label
                  htmlFor="Gender"
                  className="basis-[30%] text-[15px] font-bold"
                >
                  Gender*
                </label>
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className={`${styles.input} flex justify-end items-end basis-[60%]`}
                >
                  {isGender.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              {/* password */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <label
                  className="basis-[30%] text-[15px] font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative w-full basis-[60%]">
                  <input
                    type={!onHere ? "password" : `${type}`}
                    id="password"
                    name="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    ref={passRef}
                    disabled={!onHere}
                    className={`${styles.input} flex justify-end items-end basis-[60%] `}
                  />
                  <div className="absolute top-1 right-3">
                    {/* eyes */}
                    {onHere && <div onClick={hidePassword}>{eyes()}</div>}
                  </div>
                </div>
              </div>

              {/* address */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <label
                  className="basis-[30%] text-[15px] font-bold"
                  htmlFor="password"
                >
                  address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="off"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                  className={`${styles.input} flex justify-end items-end basis-[60%] `}
                />
              </div>

              {/* Contact */}
              <div className="flex flex-row gap-10 w-full  border-b-[1px] border-neutral70 py-4">
                <label
                  className="basis-[30%] text-[15px] font-bold"
                  htmlFor="Contact"
                >
                  Contact
                </label>
                <input
                  type="text"
                  id="Contact"
                  name="Contact"
                  autoComplete="off"
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  required
                  className={`${styles.input} flex justify-end items-end basis-[60%] `}
                />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default FormEditProfile;
