function UserCard({ name, email }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
