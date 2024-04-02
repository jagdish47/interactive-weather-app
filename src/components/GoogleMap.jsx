const GoogleMap = ({ lon, lat }) => {
  return (
    <div className="h-80 w-[60%] mt-5">
      <iframe
        className="h-[100%] w-[100%] rounded-md"
        src={`//maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
