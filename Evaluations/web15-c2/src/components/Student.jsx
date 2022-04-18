function Student({ el }) {
  return (
    <tr className="row">
      <td className="first_name">{el.first_name}</td>
      <td className="last_name">{el.last_name}</td>
      <td className="email">{el.email}</td>
      <td className="gender">{el.gender}</td>
      <td className="age">{el.age}</td>
      <td className="tenth_score">{el.tenth_score}</td>
      <td className="twelth_score">{el.twelth_score}</td>
      <td className="preferred_branch">{el.preferred_branch}</td>
    </tr>
  );
}

export { Student };
