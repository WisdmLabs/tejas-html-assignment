import Rating from "@mui/material/Rating/index.js";
import { render, useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
function RecipeRating(props) {
  const [avgRating, setAvgRating] = useState(props.avgRating);
  const [permission, setPermission] = useState(props.loggedIn);

  useEffect(() => {
    if (props.ratingCount) {
      setPermission(false);
    }
  }, []);

  return (
    <Rating
      value={avgRating}
      precision={0.5}
      onChange={async (event, rating) => {
        if (!permission) {
          return alert(
            "You have already rated this recipe or you may need to log in."
          );
        }

        setPermission(false);

        const response = await apiFetch({
          path: "wdm/v1/rate",
          method: "POST",
          data: {
            postID: props.postID,
            rating,
          },
        });

        if (response.status == 2) {
          setAvgRating(response.rating);
        }
      }}
    />
  );
}
