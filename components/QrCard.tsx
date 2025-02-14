import Image from "next/image";
import QR_img from "@/images/image-qr-code.png";
export default function QrCard() {
  return (
    <div
      style={{
        //for the border
        border: "1px solid white",
        borderRadius: "6%",
        backgroundColor: "white",
        //to center the dev
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: "70%",

        maxWidth:"400px",
        maxHeight:"500px",
        
        minHeight:"360px",
        minWidth:"260px",

        boxShadow:"5px 5px 10px 0px rgba(0,0,0,0.3)"
      }}
    >
      <Image
        src={QR_img}
        alt="QR code for the website"
        style={{
          borderRadius: "13%",
          width: "80%",
          height: "auto",
          paddingBottom:"15px",
          paddingTop:"10px"
        }}
      ></Image>
      <div style={{
        width:"70%"
      }}>
        <h1
          style={{
            fontWeight: "700",
            fontSize: "20px",
            color: "hsl(218, 44%, 22%)",
            marginTop:"10px",
            marginBottom:"15px",
             textAlign:"center"
          }}
        >
          Improve your front-end skills by building projects
        </h1>

        <p
          style={{
            fontWeight: "400",
            fontSize: "15px",
            color: "hsl(216, 15%, 48%)",
            marginBottom:"15px",
            textAlign:"center"
          }}
        >
          Scan the QR code to visit Frontend Metor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
