function Employee({ el }) {
  return (
    <tr className="row">
      <td>{el.name}</td>
      <td>{el.age}</td>
      <td>{el.address}</td>
      <td>{el.department}</td>
      <td>{el.age}</td>
      <td>{el.salary}</td>
      <td>{el.marital}</td>
    </tr>
  );
}

export { Employee };
