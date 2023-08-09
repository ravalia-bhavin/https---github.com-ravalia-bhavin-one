import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "bhavin ravalia",
          "react developer",
          "programmer",
          "web developer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
