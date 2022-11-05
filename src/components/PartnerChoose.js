import { useEffect, useState } from "react";

export default function PartnerChoose() {
  const [data, setData] = useState([]);
  const [dataCity, setDataCity] = useState([]);
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/country/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const countryId = data.map((item, index) => (
    <option key={index} value={item.id}>
      {item.title_en}
    </option>
  ));
  return (
    <div>
      <label>Choose Country</label>
      <select
        className="newUserSelect"
        name="country_id"
        id="active"
        // onChange={(e) => setcountry(e.target.value)}
        // value={country}
        required
      >
        {countryId}
      </select>
    </div>
  );
}
