import React from "react";
import PropTypes from "prop-types";
function TableHeader({ columnsNames, sort }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th
            key={c.name}
            onClick={() => sort(c.prop)}
            style={{ cursor: "pointer" }}
          >
            {c.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
TableHeader.propTypes = {
  columnsNames: PropTypes.shape({
    c: PropTypes.string,
  }).isRequired,
};
