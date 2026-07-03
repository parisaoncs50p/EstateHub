
import { useMemo, useState } from "react";
import properties from "../data/properties";

function usePropertyFilter() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchSearch = property.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCity =
        city === "" || property.city === city;

      const matchType =
        type === "" || property.type === type;

      return matchSearch && matchCity && matchType;
    });
  }, [search, city, type]);

  return {
    search,
    setSearch,

    city,
    setCity,

    type,
    setType,

    filteredProperties,
  };
}

export default usePropertyFilter;