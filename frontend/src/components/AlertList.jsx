import { useEffect, useState } from "react";
import { getAlerts, updateAlert, deleteAlert } from "../api/alertApi";

export default function AlertList() {
  const [alerts, setAlerts] = useState([]);

  const load = async () => {
    const res = await getAlerts();
    setAlerts(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px"
        }}
      >
        <thead>
          <tr style={{ background: "#eaeaea" }}>
            <th style={th}>Country</th>
            <th style={th}>City</th>
            <th style={th}>Visa</th>
            <th style={th}>Status</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map(a => (
            <tr key={a._id}>
              <td style={td}>{a.country}</td>
              <td style={td}>{a.city}</td>
              <td style={td}>{a.visaType}</td>
              <td style={td}>{a.status}</td>
              <td style={td}>
                <button
                  onClick={() =>
                    updateAlert(a._id, { status: "Booked" }).then(load)
                  }
                  style={actionBtn}
                >
                  Book
                </button>
                <button
                  onClick={() => deleteAlert(a._id).then(load)}
                  style={{ ...actionBtn, background: "#c0392b" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
  fontWeight: "bold",
  color: "#000"
};

const td = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
  color: "#000",          // 🔥 THIS FIXES “INVISIBLE DATA”
  background: "#fff"
};

const actionBtn = {
  padding: "8px 14px",
  marginRight: "8px",
  border: "none",
  borderRadius: "4px",
  background: "#000",
  color: "#fff",
  cursor: "pointer"
};
