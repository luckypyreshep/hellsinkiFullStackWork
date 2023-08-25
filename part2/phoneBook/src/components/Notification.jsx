const Notification = ({ notificationMessage, notifyType }) => {
  console.log(notifyType);
  const positiveStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };
  const negativeStyle = {
    color: "red",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={notifyType === true ? positiveStyle : negativeStyle}>
      {notificationMessage}
    </div>
  );
};

export default Notification;
