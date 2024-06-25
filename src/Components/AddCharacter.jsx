import React from "react";

function AddCharacter(props) {
  return (
    <>
      <div className="form-control flex flex-col justify-center items-center w-screen">
        <p>Enter the character's name</p>
        <input
          value={props.Name}
          type="text"
          placeholder="Name"
          className="input input-bordered w-44 md:w-72"
        />
        <br></br> <p className="text-start">choose the character's gender</p>
        <div className="flex flex-row gap-2">
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Female</label>
        </div>
        <br />
        <p>Enter a link to an image of the character</p>
        <input
          value={props.image}
          type="text"
          placeholder="Image Link"
          className="input input-bordered w-24 md:w-72"
        />
        <button className="btn btn-primary mt-2 px-4" onClick={() => addUser()}>
          Add the character
        </button>
      </div>
    </>
  );
}

export default AddCharacter;
