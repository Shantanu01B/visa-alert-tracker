import { useEffect, useState } from "react";
import { getAlerts, updateAlert, deleteAlert } from "../api/alertApi";

export default function AlertList() {
  const [alerts, setAlerts] = useState([]);
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const load = async (filters = {}) => {
    const res = await getAlerts(filters);
    setAlerts(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const applyFilters = () => {
    const filters = {};
    if (country) filters.country = country;
    if (status) filters.status = status;
    load(filters);
  };

  const clearFilters = () => {
    setCountry("");
    setStatus("");
    load();
  };

  return (
    <>
      {/* 🔹 Filter Section */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
          justifyContent: "center"
        }}
      >
        <input
          placeholder="Filter by country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={filterInput}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={filterInput}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Booked">Booked</option>
          <option value="Expired">Expired</option>
        </select>

        <button onClick={applyFilters} style={filterBtn}>
          Apply
        </button>

        <button
          onClick={clearFilters}
          style={{ ...filterBtn, background: "#777" }}
        >
          Clear
        </button>
      </div>

      {/* 🔹 Table */}
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
            {alerts.map((a) => (
              <tr key={a._id}>
                <td style={td}>{a.country}</td>
                <td style={td}>{a.city}</td>
                <td style={td}>{a.visaType}</td>
                <td style={td}>{a.status}</td>
                <td style={td}>
                  <button
                    onClick={() =>
                      updateAlert(a._id, { status: "Booked" }).then(() =>
                        load({ country, status })
                      )
                    }
                    style={actionBtn}
                  >
                    Book
                  </button>
                  <button
                    onClick={() =>
                      deleteAlert(a._id).then(() =>
                        load({ country, status })
                      )
                    }
                    style={{ ...actionBtn, background: "#c0392b" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {alerts.length === 0 && (
              <tr>
                <td colSpan="5" style={td}>
                  No alerts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* 🔹 Styles */
const filterInput = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  minWidth: "160px"
};

const filterBtn = {
  padding: "10px 16px",
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

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
  color: "#000",
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
