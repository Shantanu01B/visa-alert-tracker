import AlertForm from "./components/AlertForm";
import AlertList from "./components/AlertList";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Visa Slot Alerts
        </h2>

        <AlertForm refresh={() => window.location.reload()} />
        <AlertList />
      </div>
    </div>
  );
}
