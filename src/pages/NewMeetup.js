import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom"; //hooks

function NewMeetupPage() {
  const history = useHistory(); //ta3tina historique 
  function addMeetupHandler(meetupData) {
    fetch(
      //fetech par default get donc badlouha
      "https://ownprojectreact1-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
