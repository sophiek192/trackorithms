import "./ctf.css";

export default function CTFPage() {
  return (
    <>
      <header className="colorful-header">
        <div className="blue-band"></div>
        <div className="red-band"></div>
        <div className="yellow-band"></div>
        <p className="title">Cyber Security</p>
      </header>
      <button className="sophie-button resources"></button>
      <p className="explanation">
        Within technology, cybersecuirty aims to protect private information by identifying security
        risks, preventing cyber attacks, implementing controls to manage security risks. <br /> This
        module will explore security vulnerabilities that may pose a threat to software. Click on
        the resources (school icon) for a quick tutorial before getting into the problems!!{" "}
      </p>
      <div className="main-grid">
        <button className="sophie-button leader-board">Guess the vulnerability</button>
        <button className="sophie-button play">Insight into Security Engineering</button>
        <button className="sophie-button how-to">Decrypting</button>
      </div>
    </>
  );
}

//   function MainPage() {
//     return (
//       <main className="flex flex-grow flex-col gap-4 p-10 px-12">
//         <header className="space-y-4">
//             hi
//         </header>
//         <div className="flex-grow space-y-4">
//         </div>
//       </main>
//     );
//   }
