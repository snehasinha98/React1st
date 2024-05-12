import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FileUpload } from "primereact/fileupload";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import primeflex from "/node_modules/primeflex/primeflex.css";

export function App() {
  const arr_names = ["Sneha", "Ashutosh", "Harsh", "Punita"];

  let a = arr_names.map((item) => {
    return <p>{item}</p>;
  });

  return (
    <div>
      <div className="App">
        <Image src={logo} width="180"></Image>
        <h2 style={{ margin: "0", marginTop: "-1rem", color: "#3c456b" }}>
          Sneha Sinha
        </h2>
        <div
          style={{
            height: "2rem",
            backgroundColor: "#06b6d43d",
            border: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem", // Adding padding for better spacing
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <h4 style={{ margin: 0, marginLeft: "4rem" }}>Student Form</h4>
          </div>
          <Button
            label="Add new row"
            style={{ height: "100%", padding: "0 1rem" }}
          ></Button>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ marginRight: "1rem" }}>Name</h4>
        <InputText type="text" className="" placeholder="Enter your name" />
        <h4>DOB</h4>
        <Calendar placeholder="Choose DOB"></Calendar>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ marginRight: "1rem" }}>Class</h4>
        <InputText
          keyfilter="int"
          className=""
          placeholder="Enter your class"
        />
        <h4>Overall Marks</h4>
        <InputText
          keyfilter="int"
          className=""
          placeholder="Enter overall marks"
        />
        <h4>Maths Marks</h4>
        <InputText
          keyfilter="int"
          className=""
          placeholder="Enter Maths marks"
        />
        <h4>English Marks</h4>
        <InputText
          keyfilter="int"
          className=""
          placeholder="Enter English marks"
        />
        <h4>Science Marks</h4>
        <InputText
          keyfilter="int"
          className=""
          placeholder="Enter Science marks"
        />
        <h4>Social Science Marks</h4>
        <InputText
          keyfilter="int"
          className=""
          placeholder="Enter Social Science marks"
        />
      </div>

      <div className="grid">
        <div className="col">
          <Card
            className="border-dotted"
            style={{ marginLeft: "2rem", height: "30rem" }}
          >
            <div className="row flex">
              <h5>Name</h5>
              <InputText
                type="text"
                className=""
                placeholder="Enter your name"
              />
            </div>
          </Card>
        </div>
        <div className="col">
          <Card
            className="border-dotted"
            style={{ marginLeft: "2rem", height: "30rem" }}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export function Sneha() {
  return <h2> Hello There</h2>;
}

// export default App;
