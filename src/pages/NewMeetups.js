import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meeting-48baa-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <div>
        <h1>Add New Meetup</h1>
      </div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
