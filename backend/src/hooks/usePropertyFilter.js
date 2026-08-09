
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import properties from "../data/properties";

function usePropertyFilter() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const [searchParams] = useSearchParams();

  const smartCity = searchParams.get("city") || "";
  const smartType = searchParams.get("type") || "";
  const category = searchParams.get("category") || "";

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const keyword = search.trim().toLowerCase();

      const matchSearch =
        property.title.toLowerCase().includes(keyword) ||
        property.city.toLowerCase().includes(keyword) ||
        property.type.toLowerCase().includes(keyword) ||
        property.area.toString().includes(keyword) ||
        property.bedrooms.toString().includes(keyword) ||
        property.price.includes(search);

      const matchCity =
        (city === "" || property.city === city) &&
        (smartCity === "" || property.city === smartCity);

      const matchType =
        (type === "" || property.type === type) &&
        (smartType === "" || property.type === smartType);

      const matchCategory =
        category === "" ||
        property.category === category;

      return (
        matchSearch &&
        matchCity &&
        matchType &&
        matchCategory
      );
    });
  }, [
    search,
    city,
    type,
    smartCity,
    smartType,
    category,
  ]);

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