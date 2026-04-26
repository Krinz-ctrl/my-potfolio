function Icon({ title, img, onClick }) {
  return (
    <div className="icon" onClick={onClick}>
      <img src={img} />
      <p>{title}</p>
    </div>
  );
}

export default Icon;
