
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

function FavoriteButton({
  propertyId,
  insideLink = false,
}) {
  const [favorite, setFavorite] = useState(false);

  // بررسی اولیه
  useEffect(() => {
    updateFavorite();
  }, [propertyId]);

  // همگام‌سازی بین صفحات
  useEffect(() => {
    const handleFavoriteChange = () => {
      updateFavorite();
    };

    window.addEventListener(
      "favoritesChanged",
      handleFavoriteChange
    );

    return () => {
      window.removeEventListener(
        "favoritesChanged",
        handleFavoriteChange
      );
    };
  }, []);

  const updateFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorite(favorites.includes(propertyId));
  };

  const toggleFavorite = (e) => {
    // فقط داخل کارت‌ها جلوی باز شدن لینک را بگیر
    if (insideLink && e) {
      e.preventDefault();
      e.stopPropagation();
    }

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(propertyId)) {
      favorites = favorites.filter(
        (id) => id !== propertyId
      );
    } else {
      favorites.push(propertyId);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    setFavorite(favorites.includes(propertyId));

    window.dispatchEvent(
      new Event("favoritesChanged")
    );
  };

  return (
    <button
      onClick={toggleFavorite}
      className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow transition hover:scale-110"
    >
      <Heart
        size={24}
        className={
          favorite
            ? "fill-red-500 text-red-500"
            : "text-gray-500"
        }
      />
    </button>
  );
}

export default FavoriteButton;