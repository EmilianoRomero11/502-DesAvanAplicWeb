import { useParams } from "react-router-dom";

function ClassViewer() {
  const { classPath } = useParams();

  return (
    <div>
      <h2>Clase: {classPath}</h2>
      <iframe
        src={`/src/${classPath}/index.html`}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title={`Clase ${classPath}`}
      />
    </div>
  );
}

export default ClassViewer;
