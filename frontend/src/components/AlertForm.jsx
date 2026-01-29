import { useState } from "react";
import { createAlert } from "../api/alertApi";

export default function AlertForm({ refresh }) {
  const [form, setForm] = useState({
    country: "",
    city: "",
    visaType: "Tourist"
  });

  const submit = async () => {
    if (!form.country || !form.city) return;
    await createAlert(form);
    setForm({ country: "", city: "", visaType: "Tourist" });
    refresh();
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr auto",
        gap: "12px",
        marginBottom: "30px"
      }}
    >
      <input
        placeholder="Country"
        value={form.country}
        onChange={e => setForm({ ...form, country: e.target.value })}
        style={inputStyle}
      />

      <input
        placeholder="City"
        value={form.city}
        onChange={e => setForm({ ...form, city: e.target.value })}
        style={inputStyle}
      />

      <select
        value={form.visaType}
        onChange={e => setForm({ ...form, visaType: e.target.value })}
        style={inputStyle}
      >
        <option>Tourist</option>
        <option>Business</option>
        <option>Student</option>
      </select>

      <button onClick={submit} style={createBtn}>
        Create Alert
      </button>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  color: "#000",
  background: "#fff"
};

const createBtn = {
  padding: "12px 18px",
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};
