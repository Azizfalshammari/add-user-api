import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
function LandingPage() {
  const [Data, setData] = useState([]);
  const [newName, setnewName] = useState("");
  const [newGender, setnewGender] = useState("");
  const [newImage, setnewImage] = useState("");
  const [Query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://665736a19f970b3b36c865bf.mockapi.io/imgs")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`https://665736a19f970b3b36c865bf.mockapi.io/imgs/${id}`)
      .then((response) => {
        setData(Data.filter((character) => character.id !== id));
        return (
          <div className="toast">
            <div className="alert alert-info">
              <span>New message arrived.</span>
            </div>
          </div>
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const AddCharacter = () => {
    axios
      .post("https://665736a19f970b3b36c865bf.mockapi.io/imgs", {
        name: newName,
        gender: newGender,
        image: newImage,
      })
      .then(function (response) {});
      axios
      .get("https://665736a19f970b3b36c865bf.mockapi.io/imgs")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function handleSearch() {
    if (Query === "") {
      setData(Data);
    }
   const filterdList = Data.filter((item) => {
      if (item.name.toLowerCase().includes(Query.toLowerCase())) {
        return Data;
      }
    });
    setData(filterdList);
  }

  return (
    <>
      <Navbar />

      <div className="form-control flex flex-col justify-center items-center w-screen">
        <p>Enter the character's name</p>
        <input
          value={newName}
          type="text"
          placeholder="Name"
          className="input input-bordered w-44 md:w-72"
          onChange={(e) => {
            setnewName(e.target.value);
          }}
        />
        <p className="text-start">choose the character's gender</p>
        <div className="flex flex-row gap-2">
          <input type="radio" id="male" name="gender" value="male" onChange={(e)=>{setnewGender(e.target.value)}}/>
          <label>Male</label>
          <input type="radio" id="female" name="gender" value="female" onChange={(e)=>{setnewGender(e.target.value)}}/>
          <label>Female</label>
        </div>
        <br />
        <p>Enter a link to an image of the character</p>
        <input
          value={newImage}
          type="text"
          placeholder="Image Link"
          className="input input-bordered w-24 md:w-72"
          onChange={(e) => {
            setnewImage(e.target.value);
          }}
        />
        <button
          className="btn btn-primary mt-2 px-4"
          onClick={() => AddCharacter()}
        >
          Add the character
        </button>
      </div>
      <div className="flex flex-wrap w-full mt-2 bg-slate-600 p-3 gap-2 justify-center items-center">
        <h1 className="text-8xl text-center w-full m-2">The characters</h1>

        {Data.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            Name={element.name}
            image={
              element.image === ""
                ? "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                : element.image
            }
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </>
  );
}

export default LandingPage;
